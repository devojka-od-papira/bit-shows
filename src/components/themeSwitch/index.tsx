import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === "light") {
    return <MoonIcon onClick={toggleColorMode} />;
  } else return <SunIcon onClick={toggleColorMode} />;
}

export default ThemeSwitch;
