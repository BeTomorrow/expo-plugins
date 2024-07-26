# @betomorrow/expo-android-release-config

Provide Android signing release of your Expo CNG app from file.

# Installation in managed Expo projects

Add this package to your dependencies and reference it in the `plugins` section of your `app.json`/`app.config.js`/`app.config.ts`:
```json
{
    "plugins": [
        "@betomorrow/expo-android-release-config",
    ]
}
```
No extra configuration can be passed to the plugin at the moment.

Rerun `npx expo prebuild --clean` for the plugin to apply.

Plugin expect a file located at `android/signing.properties` (from your Expo app root), whose keys are described in the [example file](./examples/signing.properties).

# Installation in bare React Native projects

Installing this package in a bare React Native project is pointless since you can put your own signing config and commit it.

### Add the package to your npm dependencies

```
npm install expo-android-release-config
```




# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide]( https://github.com/expo/expo#contributing).
