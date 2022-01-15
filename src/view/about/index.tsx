import React from "react";
import { Text, Container } from "@chakra-ui/react";
import Footer from "../../components/footer";

function About() {
  return (
    <>
      <Container maxW="container.md" minH="100vh" position="relative">
        <Text as="h4" fontSize="3xl" mb="6">
          About BIT Shows
        </Text>
        <Text as="p" fontSize="2xl">
          This is some about description
        </Text>
      </Container>
      <Footer />
    </>
  );
}
export default About;
