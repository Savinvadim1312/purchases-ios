/**
 * @file Magic Weather screen.
 * @author Vadim Savin
 */

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

/*
 The app's weather tab that displays our pretend weather data.
 */

const WeatherScreen = () => {
  const currentData = {
    emoji: '❄️',
    temperature: 14,
    unit: 'F',
    weatherColor: '#043580',
  };

  const changeEnvironment = () => {
    // we'll change the environment in a future update
    console.log('Change environment');
  };

  const performMagic = () => {
    /*
     We should check if we can magically change the weather (subscription active) and if not, display the paywall.
     */
  };

  return (
    <View style={[styles.page, { backgroundColor: currentData.weatherColor }]}>
      {/* Sample weather details */}
      <Text style={styles.emoji}>{currentData.emoji}</Text>
      <Text style={styles.temperature}>
        {currentData.temperature}°{currentData.unit.toUpperCase()}️
      </Text>

      {/* Environment button */}
      <Pressable onPress={changeEnvironment}>
        <Text style={styles.environment}>
          <Ionicons name="navigate" color="white" size={24} /> Earth
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
