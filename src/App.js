import React from "react";
import CommentsList from "./comments/CommentsList";
import CommentForm from "./comments/CommentsForm";

function App() {
  const [comments] = React.useState(
    JSON.parse(localStorage.getItem("comments"))
  );

  return (
      <div>
        <CommentForm></CommentForm>
        {comments === null ? (
          <p>Нет комментариев</p>
        ) : comments.length === 0 ? (
          <p>Нет комментариев</p>
        ) : (

            <CommentsList comments={comments} />

        )}
      </div>
  );
}

export default App;
