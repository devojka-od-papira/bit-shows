import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Spacer, Text } from "@chakra-ui/react";
import { StarIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { selectFavoriteAction } from "./../../redux/actions";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./../../redux/store";

type CardTypes = {
  id: number;
  url: string;
  name: string;
  rating: any;
  image: any;
};

const Card: React.FC<CardTypes> = (props) => {
  const dispatch = useDispatch();
  const favorites = useAppSelector((state) => state.data.favorites);
  const selectFavorite = () => {
    dispatch(selectFavoriteAction(props, favorites));
  };
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
            <StarIcon w={6} h={6} color="yellow.200" mr={3} />
            {props.rating.average}
          </Box>
          <Spacer />
          <Box
            as="button"
            borderRadius="md"
            bg="black"
            color="white"
            px={4}
            h={8}
            onClick={selectFavorite}
          >
            <PlusSquareIcon color="yellow.300" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
