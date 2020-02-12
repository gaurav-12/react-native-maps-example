# Integrate React Native Maps - Example
The repository is an example integration of react native maps for both iOS and Android.

## Setup
Follow the instructions below to setup the project in present directory.
### iOS
1. ``` git clone https://github.com/gaurav-12/react-native-maps-example.git ```
2. ``` cd react-native-maps-example ```
3. ``` npm install ```
4. ``` cd ios && pod install && cd .. ```
5. Next, replace ``` YOUR_API_KEY_HERE ``` with the API key obtained from GCP console in ``` AppDelegate.m ```.
6. Run ``` react-native run-ios ```, or from the iOS directory, open ``` RNMaps.xcworkspace	 ``` in Xcode and run from there.
### Android
Follow steps 1 to 3 from iOS and next follow these instructions:
1. Replace ``` YOUR_API_KEY_HERE ``` in ``` AndroidManifest.xml ``` with the API key obtained from GCP console.
2. And run ``` react-native run-android ``` from the terminal.
