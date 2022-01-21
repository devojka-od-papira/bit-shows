import React from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  Box,
  Container,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import ShowSorter from "./../showSorter";
import { useAppSelector } from "../../redux/store";

type SerachBarType = {
  setFilterValue: any;
};

const SearchBar: React.FC<SerachBarType> = ({ setFilterValue }) => {
  const shows = useAppSelector((state) => state.data.shows);

  const dropDownOptions = [
    {
      name: "Name",
      value: "name",
    },
    { name: "Rating", value: "rating" },
  ];

  const handleChange = (event: any) => {
    setFilterValue(event.target.value);
  };
  return (
    <Container maxW="container.md" centerContent>
      <VStack>
        <HStack mb={6}>
          <Box>
            <InputGroup>
              <Input
                onChange={handleChange}
                placeholder="Search shows"
                variant="outline"
              />
              <InputRightElement children={<Search2Icon />} />
            </InputGroup>
          </Box>
          <Box>
            <ShowSorter options={dropDownOptions} elements={shows} />
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};
export default SearchBar;
