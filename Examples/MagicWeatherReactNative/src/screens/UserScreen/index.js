/**
 * @file User Screen.
 * @author Vadim Savin
 */

import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import styles from './styles.js';
import Credits from "../../components/Credits";

const UserScreen = () => {
  const [newUserId, setNewUserId] = useState('');

  const subscriptionActive = false;
  const isAnonymous = true;

  const restorePurchases = () => {
    // restore purchases
  };

  const login = () => {
    if (!newUserId) {
      return;
    }

    // TODO Implement login

    setNewUserId('');
  };

  const logout = () => {
    // TODO implement logout
  };

  const loginUI = () => (
    <>
      <Text style={[styles.headline, { paddingTop: 24 }]}>Login</Text>
      <TextInput
        value={newUserId}
        onChangeText={setNewUserId}
        onEndEditing={login}
        placeholder="Enter App User ID"
        placeholderTextColor="lightgrey"
        style={styles.input}
      />
    </>
  );

  const logoutUI = () => (
    <Pressable onPress={logout} style={{ marginTop: 'auto' }}>
      <Text style={styles.logoutText}>Logout</Text>
    </Pressable>
  );

  return (
    <View style={styles.page}>
      {/* The user's current app user ID and subscription status */}
      <Text style={styles.headline}>Current User Identifier</Text>
      <Text style={styles.userIdentifier}>User id</Text>

      <Text style={styles.headline}>Subscription Status</Text>
      <Text style={{ color: subscriptionActive ? 'green' : 'red' }}>
        {subscriptionActive ? 'Active' : 'Not Active'}
      </Text>

      {/* Authentication UI */}
      {isAnonymous ? loginUI() : logoutUI()}

      {/* You should always give users the option to restore purchases to connect their purchase to their current app user ID */}
      <Pressable
        onPress={restorePurchases}
        style={styles.restorePurchasesButton}>
        <Text style={styles.restorePurchasesText}>Restore Purchases</Text>
      </Pressable>

      <Credits />
    </View>
  );
};

export default UserScreen;
