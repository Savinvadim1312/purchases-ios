#  Magic Weather React Native - RevenueCat Sample

Magic Weather is a sample app demonstrating the proper methods for using RevenueCat's *Purchases* SDK. This sample uses only native platform components - no third-party SDK's other than the *Purchases* SDK.

Sign up for a free RevenueCat account [here](https://www.revenuecat.com).

## Requirements

This sample uses:

- React Native 0.63.4
- [react-native-purchases: ^4.0.0](https://www.npmjs.com/package/react-native-purchases)

See minimum react-native version requirements for RevenueCat's *Purchases* SDK [here](https://github.com/RevenueCat/react-native-purchases#requirements).

## Features

This sample demonstrates:

- How to [configure](App.js#L17) an instance of *Purchases*
- How to display product prices and names, and how to build a basic [paywall](src/screens/PaywallScreen/index.js)
- How to check [subscription status](src/screens/WeatherScreen/index.js#L29)
- How to [restore transactions](src/screens/UserScreen/index.js#L39)
- How to [identify](src/screens/UserScreen/index.js#L27) users and how to [logout](src/screens/UserScreen/index.js#L60)

## Support

For more technical resources, check out our [documentation](https://docs.revenuecat.com).

Looking for RevenueCat Support? Visit our [Help Center](https://support.revenuecat.com/hc/en-us).
