import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Wrap } from "@chakra-ui/react";
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
    <Box>
      <SearchBar setFilterValue={setFilterValue} />
      <Wrap justify="center">
        {filterValue.length > 0
          ? shows
              .filter((show: ShowType) => {
                return show.name.includes(filterValue);
              })
              .map((show: ShowType) => {
                return <Card {...show} />;
              })
          : shows.map((show: ShowType) => {
              return <Card {...show} />;
            })}
      </Wrap>
    </Box>
  );
}
export default Home;
