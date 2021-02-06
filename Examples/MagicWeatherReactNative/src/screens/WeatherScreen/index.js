/**
 * @file Magic Weather screen.
 * @author Vadim Savin
 */

import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';
import {
  testCold,
  generateSampleData,
  Environment,
} from '../Helpers/SampleData';

/*
 The app's weather tab that displays our pretend weather data.
 */

const WeatherScreen = () => {
  const [weatherData, setWeatherData] = useState(testCold);

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
      <Pressable onPress={performMagic} style={styles.changeWeatherButton}>
        <Text style={styles.changeWeatherTitle}>✨ Change the Weather</Text>
      </Pressable>
    </View>
  );
};

export default WeatherScreen;
