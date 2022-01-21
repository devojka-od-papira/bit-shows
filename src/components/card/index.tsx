import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Spacer, Text } from "@chakra-ui/react";

type CardTypes = {
  id: number;
  url: string;
  name: string;
  rating: any;
  image: any;
  favoriteButton?: any;
  ratingIcon?: any;
};

const Card: React.FC<CardTypes> = (props) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Link to={`/detail/${props.id}`}>
        <Box>
          <Image w="100%" h="400px" src={props.image.original} alt="" />
        </Box>
      </Link>
      <Box p="6">
        <Box>
          <Text overflowWrap="break-word" mt="1" fontWeight="semibold" as="h4">
            {props.name}
          </Text>
        </Box>
        <Box display="flex" mt="2" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            ml="2"
          >
            {props?.ratingIcon ? props.ratingIcon : null}
            {props.rating.average}
          </Box>
          <Spacer />
          {props.favoriteButton ? props.favoriteButton : null}
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
