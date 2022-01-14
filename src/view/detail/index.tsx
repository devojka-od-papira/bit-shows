import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./../../redux/store";
import { fetchDetailShowAction } from "./../../redux/actions";
import {
  Wrap,
  WrapItem,
  Image,
  Box,
  Stack,
  Text,
  Divider,
  HStack,
  VStack,
  Tag,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailShow = useAppSelector((state) => state.data.detailShow);

  useEffect(() => {
    dispatch(fetchDetailShowAction(id || ""));
  }, []);
  return detailShow ? (
    <Container
      style={{ backgroundColor: "orange" }}
      maxW="container.md"
      centerContent
    >
      <Grid
        style={{ backgroundColor: "blue" }}
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem style={{ backgroundColor: "red" }} w="100%">
          <Box>
            <Image src={detailShow.image.original} />
          </Box>
        </GridItem>
        <GridItem w="100%">
          <VStack spacing={6} align="stretch">
            <Box>
              <Text fontSize="4xl">{detailShow.name}</Text>
            </Box>
            <Box>
              {detailShow.genres.map((genre: string, index: number) => {
                return (
                  <Tag mr={2} key={index}>
                    {genre}
                  </Tag>
                );
              })}
            </Box>
            <Box>
              <Text fontSize="lg">
                {detailShow.summary.replace(/(<([^>]+)>)/gi, "")}
              </Text>
            </Box>
          </VStack>
        </GridItem>
        <div>
          <Divider />
        </div>
        <GridItem>
          <VStack>
            <Box></Box>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  ) : null;
}
export default Details;
