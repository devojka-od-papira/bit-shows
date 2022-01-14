import React from "react";
import { InputGroup, Input, InputRightElement, Wrap } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import ShowSorter from "./../showSorter";

type SerachBarType = {
  setFilterValue: any;
};

const SearchBar: React.FC<SerachBarType> = ({ setFilterValue }) => {
  const handleChange = (event: any) => {
    setFilterValue(event.target.value);
  };
  return (
    <Wrap justify="center" mb={6}>
      <InputGroup w="60%">
        <Input
          onChange={handleChange}
          placeholder="Search shows"
          variant="outline"
        />
        <InputRightElement children={<Search2Icon />} />
      </InputGroup>
      <ShowSorter />
    </Wrap>
  );
};
export default SearchBar;
