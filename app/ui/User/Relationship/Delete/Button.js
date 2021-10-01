import React from "react";
import { Button } from "native-base";

function UI() {
  const clickHandler = (e) => {
    console.log("User Relationship Delete Button");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
      p="2"
      rounded="8"
      w="100%"
      bgColor="gray.100"
      onPress={clickHandler}
    >
      Xoá
    </Button>
  );
}
export default UI;

// A và B chưa kết bạn với nhau, A gửi lời mời kết bạn cho B và B từ chối
