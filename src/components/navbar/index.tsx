import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function NavBar() {
  return (
    <nav>
      <ul>
        <li></li>
        <li></li>
        <li>
          <MoonIcon w={6} h={6} />
          <SunIcon w={6} h={6} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
