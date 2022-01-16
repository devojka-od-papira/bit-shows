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

type SerachBarType = {
  setFilterValue: any;
};

const SearchBar: React.FC<SerachBarType> = ({ setFilterValue }) => {
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
            <ShowSorter />
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};
export default SearchBar;
