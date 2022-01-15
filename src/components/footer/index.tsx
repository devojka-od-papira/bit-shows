import React from "react";
import { Container, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Container maxW="container.md">
      <Flex
        position="absolute"
        bottom="0"
        left="0"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={0}
        p={6}
        bg={["primary.500", "primary.500", "blue", "blue"]}
        color={["white", "white", "primary.700", "primary.700"]}
      >
        <Text color="width">© 2022 Copyright BIT</Text>
      </Flex>
    </Container>
  );
}
export default Footer;
