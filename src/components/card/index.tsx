import React from "react";
import { Box, Image, Spacer } from "@chakra-ui/react";
import { StarIcon, PlusSquareIcon } from "@chakra-ui/icons";

type CardTypes = {
  url: string;
  name: string;
  rating: any;
  image: any;
};

const Card: React.FC<CardTypes> = ({ name, rating, image }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image w="400px" h="480px" src={image.original} alt="" />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          ></Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            ml="2"
          >
            <StarIcon w={6} h={6} color="yellow.200" mr={3} />
            {rating.average}
          </Box>

          <Spacer />
          <Box
            as="button"
            borderRadius="md"
            bg="black"
            color="white"
            px={4}
            h={8}
          >
            Add to favorite list <PlusSquareIcon color="yellow.300" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
