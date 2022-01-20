/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./../../redux/store";
import {
  fetchDetailShowAction,
  fetchActorsAction,
} from "./../../redux/actions";
import {
  Image,
  Box,
  Text,
  Divider,
  Avatar,
  VStack,
  Tag,
  Container,
  Grid,
  GridItem,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";
import Footer from "../../components/footer";

function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailShow = useAppSelector((state) => state.data.detailShow);
  const actors = useAppSelector((state) => state.data.actors);
  const [gridActive, setGridActive] = useState(true);

  const handleGridActive = () => {
    setGridActive(!gridActive);
  };

  useEffect(() => {
    dispatch(fetchDetailShowAction(id || ""));
    dispatch(fetchActorsAction(id || ""));
  }, []);
  return detailShow ? (
    <>
      <Container maxW="container.md" centerContent>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%">
            <Box>
              <Image src={detailShow.image.original} />
            </Box>
          </GridItem>
          <GridItem w="100%">
            <VStack spacing={6} align="stretch">
              <Box>
                <Text ml="10" fontSize="4xl">
                  {detailShow.name}
                </Text>
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
        </Grid>
      </Container>
      <Container maxW="container.md">
        <Divider mb="4" mt="4" />
        <HStack mb="5">
          <Box>
            <Text fontSize="4xl">Actors</Text>
          </Box>
          <Spacer />
          <Box>
            <Box onClick={handleGridActive}>
              {gridActive ? <HamburgerIcon /> : <DragHandleIcon />}
            </Box>
          </Box>
        </HStack>
        {actors.length > 0 && gridActive
          ? actors.map((actor: any, index: number) => {
              return (
                <Box p={4} boxShadow="lg">
                  <HStack spacing={4}>
                    <Avatar
                      key={index}
                      name={actor.person.name}
                      src={actor.person.image.original}
                    />
                    <Text fontSize="lg">{actor.person.name}</Text>
                  </HStack>
                </Box>
              );
            })
          : null}
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {actors.length > 0 && gridActive === false
            ? actors.map((actor: any, index: number) => {
                return (
                  <GridItem w="100%" h="auto">
                    <Image key={index} src={actor.person.image.original} />
                    <Text>{actor.person.name}</Text>
                  </GridItem>
                );
              })
            : null}
        </Grid>
      </Container>
      <Footer />
    </>
  ) : null;
}
export default Details;
