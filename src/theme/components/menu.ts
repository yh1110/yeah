import { ComponentMultiStyle } from "@yamada-ui/react";

export const Menu: ComponentMultiStyle<"Menu"> = {
  baseStyle: {
    button: {
      transitionDuration: "normal",
      transitionProperty: "common",
    },
    command: {
      opacity: 0.6,
    },
    content: {
      bg: ["#171717", "black"],
      border: "1.5px solid white",
      borderColor: ["#2f2f2f", "whiteAlpha.100"],
      // borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      boxShadow: ["lg", "dark-lg"],
      color: "inherit",
      minW: "xs",
      rounded: "md",
      zIndex: "guldo",
      mt: "md",
    },
    divider: {
      borderBottomWidth: "1px",
      borderColor: "inherit",
      my: "2",
    },
    group: {},
    groupLabel: {
      color: ["blackAlpha.700", "whiteAlpha.600"],
      fontSize: "sm",
      fontWeight: "semibold",
      px: "3",
      // py: "1.5",
      py: "1.5",
    },
    icon: {
      color: ["blackAlpha.600", "whiteAlpha.700"],
    },
    item: {
      cursor: "pointer",
      px: "3",
      py: "3",
      // py: "0",
      transitionDuration: "ultra-fast",
      transitionProperty: "background",
      transitionTimingFunction: "ease-in",
      _active: {
        // bg: ["blackAlpha.50", "whiteAlpha.50"],
        bg: ["#2f2f2f", "whiteAlpha.50"],
        _disabled: {
          bg: ["white", "black"],
        },
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.4,
      },
      _focus: {
        bg: ["#2f2f2f", "whiteAlpha.50"],
        // bg: ["blackAlpha.50", "whiteAlpha.50"],
      },
    },
    list: {
      outline: "none",
      // py: "2",
      py: "0",
    },
  },
};
