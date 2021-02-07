/**
 * @file Paywall Screen.
 * @author Vadim Savin
 */

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PackageItem from '../../components/PackageItem';
import styles from './styles.js';

const packages = [
  {
    localizedTitle: 'Pro Weekly',
    terms: 'Unlocks Premium',
    localizedPriceString: '$5.49',
  },
  {
    localizedTitle: 'Pro 6 Months',
    terms: '1 week free trial',
    localizedPriceString: '$37.99',
  },
  {
    localizedTitle: 'Pro 1 Year',
    terms: 'Unlocks Premium',
    localizedPriceString: '$59.99',
  },
  {
    localizedTitle: 'Pro Monthly',
    terms: 'Unlocks Premium',
    localizedPriceString: '$24.99',
  },
];

const PaywallScreen = () => {
  const header = () => <Text style={styles.text}>Magic Weather Premium</Text>;

  const footer = () => {
    console.warn(
      "Modify this value to reflect your app's Privacy Policy and Terms & Conditions agreements. Required to make it through App Review.",
    );
    return (
      <Text style={styles.text}>
        Don't forget to add your subscription terms and conditions. Read more
        about this here:
        https://www.revenuecat.com/blog/schedule-2-section-3-8-b
      </Text>
    );
  };

  return (
    <View style={styles.page}>
      {/* The paywall view list displaying each package */}
      <FlatList
        data={packages}
        renderItem={({ item }) => <PackageItem packageItem={item} />}
        ListHeaderComponent={header}
        ListHeaderComponentStyle={{ marginVertical: 10 }}
        ListFooterComponentStyle={{ marginVertical: 10 }}
        ListFooterComponent={footer}
      />
    </View>
  );
};

export default PaywallScreen;
