// @ts-check
import { withAppBuildGradle, type ConfigPlugin } from "@expo/config-plugins";

const androidSigningConfig = `
android {
    defaultConfig {
        versionCode project.hasProperty("versionCode") ? project.property("versionCode") as Integer : 1
    }
}
`;

export interface PluginProps {}

const withAndroidVersionInjection: ConfigPlugin<PluginProps> = (config) =>
  withAppBuildGradle(config, async (file) => {
    file.modResults.contents += androidSigningConfig;
    return file;
  });

export default withAndroidVersionInjection;
