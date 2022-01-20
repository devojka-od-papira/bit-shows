/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { fetchShowsAction } from "./../../redux/actions";
import { useAppSelector } from "./../../redux/store";
import Card from "./../../components/card";
import SearchBar from "../../components/search";
import Footer from "../../components/footer";

type ShowType = {
  id: number;
  url: string;
  name: string;
  rating: any;
  image: any;
};

function Home() {
  const dispatch = useDispatch();
  const shows = useAppSelector((state) => state.data.shows);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    dispatch(fetchShowsAction());
  }, []);

  return (
    <>
      <Container maxW="container.md" minH="100vh" position="relative">
        <SearchBar setFilterValue={setFilterValue} />
        <Grid templateColumns="repeat(3, 1fr)" gap={6} pb="80px">
          {filterValue.length > 0
            ? shows
                .filter((show: ShowType) => {
                  return show.name.includes(filterValue);
                })
                .map((show: ShowType) => {
                  return (
                    <GridItem key={show.id} w="100%">
                      <Card {...show} />
                    </GridItem>
                  );
                })
            : shows.map((show: ShowType) => {
                return (
                  <GridItem key={show.id} w="100%">
                    <Card {...show} />
                  </GridItem>
                );
              })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
