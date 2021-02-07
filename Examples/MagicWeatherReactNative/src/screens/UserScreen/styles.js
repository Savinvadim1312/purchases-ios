/**
 * @file User Screen styles.
 * @author Vadim Savin
 */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    padding: 36,
  },
  headline: {
    color: 'white',
    fontFamily: 'ArialRoundedMTBold',
    fontSize: 18,
    paddingVertical: 8,
  },
  userIdentifier: {
    color: 'white',
  },
  input: {
    paddingTop: 8,
    color: 'white',
  },
  restorePurchasesButton: {
    marginTop: 'auto',
  },
  restorePurchasesText: {
    color: 'dodgerblue',
    fontFamily: 'ArialRoundedMTBold',
    fontSize: 18,
    paddingVertical: 16,
  },
  logoutText: {
    color: 'red',
    fontFamily: 'ArialRoundedMTBold',
    fontSize: 18,
  }
});

export default styles;
