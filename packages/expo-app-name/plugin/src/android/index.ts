import {
  AndroidConfig,
  withStringsXml,
  type ConfigPlugin,
} from "@expo/config-plugins";
import type { PluginProps } from "../types";

export const withAndroidAppName: ConfigPlugin<PluginProps> = (
  config,
  { name }
) =>
  withStringsXml(config, async (config) => {
    config.modResults = AndroidConfig.Strings.setStringItem(
      [
        AndroidConfig.Resources.buildResourceItem({
          name: "app_name",
          value: name,
        }),
      ],
      config.modResults
    );
    return config;
  });
