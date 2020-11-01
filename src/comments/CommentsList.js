import React from "react";
import CommentsItem from "./CommentsItem";

export default function CommentsList(props) {
  return (
    <ul>
      {props.comments.map((comment) => {
        return <CommentsItem comment={comment} key={comment.id} />;
      })}
    </ul>
  );
}
