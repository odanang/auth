import React from "react";
import { gql, useMutation } from "@apollo/client";

export const COMMENT_UPDATE = gql`
  mutation($id: ID!, $data: InteractiveCommentUpdateInput) {
    updateInteractiveComment(id: $id, data: $data) {
      id
      content
    }
  }
`;

export default function CommentUpdate({ UI, comment, ...props }) {
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_UPDATE, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (e) => {
      console.error(e);
    },
  });
  const onPress = (e) => {
    on({
      variables: { id: comment.id, data: { interactive: { create: {} } } },
    });
  };
  if (loading) return "...";
  if (error) return error.message;
  const { commentUpdate } = data;
  return (
    <UI
      {...props}
      comment={comment}
      on={on}
      commentUpdate={commentUpdate}
      onPress={onPress}
    />
  );
}
