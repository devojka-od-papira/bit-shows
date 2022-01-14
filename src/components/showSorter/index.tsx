import React from "react";
import { Stack, Select } from "@chakra-ui/react";
import { sortShowsAction } from "./../../redux/actions";
import { useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";

function ShowSorter() {
  const dispatch = useDispatch();
  const shows = useAppSelector((state) => state.data.shows);

  const handleSelect = (event: any) => {
    dispatch(sortShowsAction(event.target.value, shows));
  };
  return (
    <Stack>
      <Select
        onChange={handleSelect}
        variant="outline"
        placeholder="Sort shows"
      >
        <option value="name">Name</option>
        <option value="rating">Rating</option>
      </Select>
    </Stack>
  );
}
export default ShowSorter;
