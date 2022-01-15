import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Container, Grid, GridItem, Wrap } from "@chakra-ui/react";
import { fetchShowsAction } from "./../../redux/actions";
import { useAppSelector } from "./../../redux/store";
import Card from "./../../components/card";
import SearchBar from "../../components/search";

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
    <Container maxW="container.md">
      <SearchBar setFilterValue={setFilterValue} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {filterValue.length > 0
          ? shows
              .filter((show: ShowType) => {
                return show.name.includes(filterValue);
              })
              .map((show: ShowType) => {
                return (
                  <GridItem>
                    <Link to={`/deatil/${show.id}`}>
                      <Card {...show} />
                    </Link>
                  </GridItem>
                );
              })
          : shows.map((show: ShowType) => {
              return (
                <GridItem w="100%">
                  <Link to={`/detail/${show.id}`}>
                    <Card {...show} />
                  </Link>
                </GridItem>
              );
            })}
      </Grid>
    </Container>
  );
}
export default Home;
