import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WeatherRouter from './WeatherRouter';
import UserRouter from './UserRouter';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Weather"
          component={WeatherRouter}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'sunny' : 'sunny-outline'}
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="User"
          component={UserRouter}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={
                  focused ? 'ios-person-circle' : 'ios-person-circle-outline'
                }
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
