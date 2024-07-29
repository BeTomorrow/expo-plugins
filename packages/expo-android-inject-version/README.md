# @betomorrow/expo-android-inject-version

Inject Android version code from your Gradle properties.

# Installation in managed Expo projects

Add this package to your dependencies and reference it in the `plugins` section of your `app.json`/`app.config.js`/`app.config.ts`:
```json
{
    "plugins": [
        "@betomorrow/expo-android-inject-version",
    ]
}
```
No extra configuration can be passed to the plugin at the moment.

Rerun `npx expo prebuild --clean` for the plugin to apply.

From now, you can pass your `versionCode` value as a Gradle property during your build (using Fastlane, environment variables, whatever suits you).

# Installation in bare React Native projects

Installing this package in a bare React Native project is pointless since you can put your own signing config and commit it.

### Add the package to your npm dependencies

Any package manager will do, adjust to your preferences.

```
npm install expo-android-inject-version
```
