import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

const WeatherScreen = (props) => {
  const currentData = {
    emoji: '❄️',
    temperature: 14,
    unit: 'F',
    weatherColor: '#043580',
  };

  const changeEnvironment = () => {
    /// - we'll change the environment in a future update
    console.log('Change environment');
  };

  const performMagic = () => {
    /*
     We should check if we can magically change the weather (subscription active) and if not, display the paywall.
     */
  };

  return (
    <View style={[styles.page, { backgroundColor: currentData.weatherColor }]}>
      <Text style={styles.emoji}>{currentData.emoji}</Text>

      <Text style={styles.temperature}>
        {currentData.temperature}°{currentData.unit.toUpperCase()}️
      </Text>

      <Pressable onPress={changeEnvironment}>
        <Text style={styles.environment}>
          <Ionicons name="navigate" color="white" size={24} /> Earth
        </Text>
      </Pressable>

      <Pressable onPress={performMagic} style={styles.changeWeatherButton}>
        <Text style={styles.changeWeatherTitle}>✨ Change the Weather</Text>
      </Pressable>
    </View>
  );
};

export default WeatherScreen;
