import { THEME_ENUM } from "@/constants/theme.constant";
export const themeConfig = {
  themeSchema: "default",
  direction: THEME_ENUM.DIR_LTR,
  mode: THEME_ENUM.MODE_LIGHT,
  panelExpand: false,
  controlSize: "md",
  layout: {
    type: THEME_ENUM.LAYOUT_COLLAPSIBLE_SIDE,
    sideNavCollapse: false,
  },
};
