# @betomorrow/expo-app-name

Change app name across variants while keeping constant project file paths (looking at you, iOS).

_Rationale_: changing `name` in `app.json`/`app.config.js`/`app.config.ts` also change name
of the iOS project, which can break/complicate your pipelines if you 're not using EAS.
This plugin modifies `CFBundleDisplayName` (iOS) and `app_name` (Android) as a workaround.

# Installation in managed Expo projects

Add this package to your dependencies and reference it in the `plugins` section of your `app.json`/`app.config.js`/`app.config.ts`:
```json
{
    "plugins": [
        "@betomorrow/expo-app-name",
        { "name": "My new app name" }
    ]
}
```
Plugin expects the app name to be passed.
To make it "dynamic", use `app.config.js` and adjust to your conditions.

Rerun `npx expo prebuild --clean` for the plugin to apply, including when changing app name.

From now, you can pass your `versionCode` value as a Gradle property during your build (using Fastlane, environment variables, whatever suits you).

# Installation in bare React Native projects

Installing this package in a bare React Native project is pointless since you can put your own signing config and commit it.

### Add the package to your npm dependencies

Any package manager will do, adjust to your preferences.

```
npm install expo-app-name
```
