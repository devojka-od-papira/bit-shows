import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type MenuItemsTypes = {
  isOpen: boolean;
};

const MenuItems: React.FC<MenuItemsTypes> = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <Link to="/">BIT Shows</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About </Link>
      </Stack>
    </Box>
  );
};
export default MenuItems;
