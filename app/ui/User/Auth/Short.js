import { Button, Text } from "native-base";
import React from "react";
import UserAuth from "./Controller";
import { Link } from "@react-navigation/native";

function UI({ loading, error, user }) {
  if (loading) return <Text>Loading</Text>;
  if (!user) return <Text>Login first</Text>;
  return (
    <Link to={{ screen: "user" }}>
      <Button
        rounded={8}
        bgColor="gray.100"
        p="2"
        px="3"
        _text={{ color: "gray.400", fontWeight: "600" }}
      >
        {user.name}
      </Button>
    </Link>
  );
}
export default function UserAuthShort(props) {
  return <UserAuth {...props} UI={UI} />;
}
