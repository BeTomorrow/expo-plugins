# @betomorrow/expo-app-name

Change app name across variants while keeping constant project file paths (looking at you, iOS).

_Rationale_: changing `name` in `app.json`/`app.config.js`/`app.config.ts` also change name
of the iOS project. This plugin modifies `CFBundleDisplayName` (iOS) and `app_name` (Android)
as a workaround.

# Installation in managed Expo projects

Add this package to your dependencies and reference it in the `plugins` section of your `app.json`/`app.config.js`/`app.config.ts`:
```json
{
    "plugins": [
        "@betomorrow/expo-app-name",
    ]
}
```
Plugin expect the app name.

Rerun `npx expo prebuild --clean` for the plugin to apply.

From now, you can pass your `versionCode` value as a Gradle property during your build (using Fastlane, environment variables, whatever suits you).

# Installation in bare React Native projects

Installing this package in a bare React Native project is pointless since you can put your own signing config and commit it.

### Add the package to your npm dependencies

Any package manager will do, adjust to your preferences.

```
npm install expo-app-name
```
