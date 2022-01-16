import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Footer from "../../components/footer";
import { useAppSelector } from "./../../redux/store";
import Card from "./../../components/card";

function Favorite() {
  const favorites = useAppSelector((state) => state.data.favorites);
  return (
    <>
      <Container maxW="container.md" minH="100vh" position="relative">
        <Grid templateColumns="repeat(3, 1fr)" gap={6} pb="80px">
          {favorites.map((favorite: any, id: number) => {
            return (
              <GridItem key={id} w="100%">
                <Card {...favorite} />
              </GridItem>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
export default Favorite;
