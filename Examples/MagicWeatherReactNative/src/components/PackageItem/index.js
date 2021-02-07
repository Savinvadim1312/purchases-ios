import React from 'react';
import { View, Text, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles.js';

const PackageItem = ({ packageItem }) => {
  const { localizedTitle, terms, localizedPriceString } = packageItem;

  const onSelection = () => {
    // TODO implement selection
  };

  return (
    <Pressable onPress={onSelection} style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{localizedTitle}</Text>
        <Text style={styles.terms}>{terms}</Text>
      </View>
      <Text style={styles.title}>{localizedPriceString}</Text>
    </Pressable>
  );
};

PackageItem.propTypes = {
  packageItem: PropTypes.shape({
    localizedTitle: PropTypes.string.isRequired,
    terms: PropTypes.string.isRequired,
    localizedPriceString: PropTypes.string.isRequired,
  }).isRequired,
};

export default PackageItem;
