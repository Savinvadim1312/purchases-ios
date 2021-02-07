/**
 * @file Magic Weather screen.
 * @author Vadim Savin
 */

import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Credits from '../../components/Credits';
import {
  testCold,
  generateSampleData,
  Environment,
} from '../../Helpers/SampleData';
import styles from './styles.js';

/*
 The app's weather tab that displays our pretend weather data.
 */

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(testCold);

  const navigation = useNavigation();

  const changeEnvironment = () => {
    // we'll change the environment in a future update
    console.log('Change environment');
  };

  const performMagic = () => {
    /*
     We should check if we can magically change the weather (subscription active) and if not, display the paywall.
     */
    setWeatherData(generateSampleData(Environment.EARTH));
  };

  return (
    <View style={[styles.page, { backgroundColor: weatherData.weatherColor }]}>
      {/* Sample weather details */}
      <Text style={styles.emoji}>{weatherData.emoji}</Text>
      <Text style={styles.temperature}>
        {weatherData.temperature}°{weatherData.unit.toUpperCase()}️
      </Text>

      {/* Environment button */}
      <Pressable onPress={changeEnvironment}>
        <Text style={styles.environment}>
          <Ionicons name="navigate" color="white" size={24} />{' '}
          {weatherData.environment}
        </Text>
      </Pressable>

      {/* The magic button that is disabled behind our paywall */}
      <Pressable onPress={() => navigation.navigate('Paywall')} style={styles.changeWeatherButton}>
        <Text style={styles.changeWeatherTitle}>Paywall</Text>
      </Pressable>

      {/* The magic button that is disabled behind our paywall */}
      <Pressable onPress={performMagic} style={styles.changeWeatherButton}>
        <Text style={styles.changeWeatherTitle}>✨ Change the Weather</Text>
      </Pressable>

      <Credits />
    </View>
  );
};

export default WeatherScreen;
