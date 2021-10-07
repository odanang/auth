import React from "react";
import { Container, HStack, Box, Flex } from "native-base";
import {
  UserAuthShort,
  UserSignOutButton,
  UserListSuggestFixed,
} from "../ui/User";
import { PostListSimple, PostCreateButton } from "../ui/Post";
import EarlyAccess from "./EarlyAcess";

export default function Home({ navigation }) {
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt="64px"
      maxW="full"
      px={["0", "8px"]}
    >
      {/* <EarlyAccess /> */}
      <Flex w="full" direction="row">
        <Box
          flex={[1, 1, 1, 9]}
          maxW="680px"
          mx={["auto", "auto", "auto", "0"]}
        >
          <PostCreateButton />
          <PostListSimple />
        </Box>
        <Box flex={[0, 0, 0, 3]} display={["none", "none", "none", "block"]}>
          <Box
            w="full"
            py="8px"
            pl="24px"
            pr="8px"
            position="sticky"
            top="64px"
          >
            <UserListSuggestFixed />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
