// @ts-check
import { withAppBuildGradle, type ConfigPlugin } from "@expo/config-plugins";

const androidSigningConfig = `
android {
    signingConfigs {
        release {
            file("../../signing.properties").with { propFile ->
                if (propFile.canRead()) {
                    def properties = new Properties()
                    properties.load(new FileInputStream(propFile))
                    storeFile file(properties['keystorePath'])
                    storePassword properties['keystorePassword']
                    keyAlias properties['keyAlias']
                    keyPassword properties['keyPassword']
                } else {
                    println 'Unable to read signing.properties'
                }
            }
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
}
`;

export interface PluginProps {}

const withAndroidSigningInjection: ConfigPlugin<PluginProps> = (config) =>
  withAppBuildGradle(config, async (file) => {
    file.modResults.contents += androidSigningConfig;
    return file;
  });

export default withAndroidSigningInjection;
