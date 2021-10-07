import React from "react";
import { gql, useMutation } from "@apollo/client";

export const POST_CREATE = gql`
  mutation($data: PostCreateInput) {
    createPost(data: $data) {
      id
      content
      tags {
        content
      }
    }
  }
`;

export default function PostCreate({ UI }) {
  const [on, { loading, error, data = {} }] = useMutation(POST_CREATE);
  const { createPost } = data;
  return <UI loading={loading} error={error} on={on} createPost={createPost} />;
}
