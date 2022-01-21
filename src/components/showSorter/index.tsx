import React from "react";
import { Stack, Select } from "@chakra-ui/react";
import { sortShowsAction } from "./../../redux/actions";
import { useDispatch } from "react-redux";

type SorterType = {
  options: any;
  elements: any;
};
type OptionType = {
  name: string;
  value: string;
};

const ShowSorter: React.FC<SorterType> = ({ options, elements }) => {
  const dispatch = useDispatch();

  const handleSelect = (event: any) => {
    dispatch(sortShowsAction(event.target.value, elements));
  };

  return (
    <Stack>
      <Select
        onChange={handleSelect}
        variant="outline"
        placeholder="Sort shows"
      >
        {options.map((option: OptionType) => {
          return (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </Select>
    </Stack>
  );
};
export default ShowSorter;
