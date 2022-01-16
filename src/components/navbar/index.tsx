import React from "react";
import { Flex, Container, Box } from "@chakra-ui/react";
import MenuItems from "../menuItems";
import ThemeSwitch from "../themeSwitch";

function NavBar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={6}
      bg={["primary.500", "primary.500", "blue", "blue"]}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      <Container maxW="container.md">
        <Box alignItems="center" justifyContent="space-between" display="flex">
          <MenuItems isOpen={false} />
          <ThemeSwitch />
        </Box>
      </Container>
    </Flex>
  );
}

export default NavBar;
