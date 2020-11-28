import React from "react";
import { CommentsItem } from "./CommentsItem";

class CommentsList extends React.Component {
  del =() => {console.log("qq")}
  render() {
    const comment = this.props.data;
    let commentsTemplate;
    if (comment !== null && comment.length > 0) {
      commentsTemplate = comment.map(function (item) {
        return <CommentsItem key={item.id} comment={item}/>;
      });
    } else {
      commentsTemplate = <li>Нет комментариев</li>;
    }
    return <ul>{commentsTemplate}</ul>;
  }
}

export { CommentsList };
