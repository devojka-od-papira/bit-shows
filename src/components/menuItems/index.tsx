import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type MenuItemsTypes = {
  isOpen: boolean;
  pages: any;
};

type NavType = {
  url: string;
  name: string;
};

const MenuItems: React.FC<MenuItemsTypes> = ({ isOpen, pages }) => {
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
        {pages.map((page: NavType) => {
          return (
            <Link key={page.name} to={page.url}>
              {page.name}
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};
export default MenuItems;
