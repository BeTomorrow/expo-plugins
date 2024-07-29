import {
  IOSConfig,
  withInfoPlist,
  type ConfigPlugin,
} from "@expo/config-plugins";
import type { PluginProps } from "../types";

export const withIosAppName: ConfigPlugin<PluginProps> = (
  config,
  { name }
) =>
  withInfoPlist(config, async (config) => {
    config.modResults = IOSConfig.Name.setDisplayName(name, config.modResults);
    return config;
  });
