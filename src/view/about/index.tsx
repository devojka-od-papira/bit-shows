import React from "react";
import { Text, Container } from "@chakra-ui/react";

function About() {
  return (
    <Container maxW="container.md" h="calc(100vh - 104px)">
      <Text as="h4" fontSize="3xl" mb="6">
        About BIT Shows
      </Text>
      <Text as="p" fontSize="2xl">
        This is some about description
      </Text>
    </Container>
  );
}
export default About;
