import React from "react";
import { Container, Grid, GridItem, Box } from "@chakra-ui/react";
import { useAppSelector } from "./../../redux/store";
import { DeleteIcon } from "@chakra-ui/icons";
import Footer from "../../components/footer";
import Card from "./../../components/card";

type FavoriteType = {};

const Favorite: React.FC<FavoriteType> = () => {
  const favorites = useAppSelector((state) => state.data.favorites);
  return (
    <>
      <Container maxW="container.md" minH="100vh" position="relative">
        <Grid templateColumns="repeat(3, 1fr)" gap={6} pb="80px">
          {favorites.map((favorite: any) => {
            return (
              <GridItem key={favorite.id} w="100%">
                <Card
                  favoriteButton={
                    <Box
                      as="button"
                      borderRadius="md"
                      bg="black"
                      color="white"
                      px={4}
                      h={8}
                      onClick={() => console.log("unfoavorite")}
                    >
                      <DeleteIcon color="red.300" />
                    </Box>
                  }
                  {...favorite}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
export default Favorite;
