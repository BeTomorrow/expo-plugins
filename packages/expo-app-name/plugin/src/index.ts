import { withPlugins, type ConfigPlugin } from "@expo/config-plugins";
import { withAndroidAppName } from "./android";
import { withIosAppName } from "./ios";
import type { PluginProps } from "./types";

const withAppName: ConfigPlugin<PluginProps> = (config, props) =>
  withPlugins(config, [
    [withIosAppName, props],
    [withAndroidAppName, props],
  ]);

export default withAppName;
export type { PluginProps } from "./types";
