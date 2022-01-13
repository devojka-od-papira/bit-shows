import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Wrap } from "@chakra-ui/react";
import { fetchShowsAction } from "./../../redux/actions";
import { useAppSelector } from "./../../redux/store";
import Card from "./../../components/card";

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
  console.log("shDAT", shows);
  useEffect(() => {
    dispatch(fetchShowsAction());
  }, []);

  return (
    <div>
      <Wrap justify="center">
        {shows.map((show: ShowType) => {
          return <Card {...show} />;
        })}
      </Wrap>
    </div>
  );
}
export default Home;
