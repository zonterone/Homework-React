import React from "react";

export default function CommentsItem({ comment }) {
  return (
    <li>
      <h2>{comment.authorName}</h2>
      <p>{comment.commentText}</p>
      <span>{comment.commentTime}</span>
      <button commentid={comment.id} onClick={commentDelete}>
        удалить
      </button>
    </li>
  );
}

function commentDelete(ev) {
  let targetId = +(ev.target.attributes.commentid.value);
  let storage = JSON.parse(localStorage.getItem("comments"));
  localStorage.setItem(
    "comments",
    JSON.stringify(storage.filter((item) => item.id !== targetId))
  );
}
