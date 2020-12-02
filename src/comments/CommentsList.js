import React from "react";
import { CommentsItem } from "./CommentsItem";

class CommentsList extends React.Component {
  render() {
    const { onDeleteComment } = this.props
    const comment = this.props.data;
    let commentsTemplate;
    if (comment && comment.length) {
      commentsTemplate = comment.map(function (item) {
        return <CommentsItem key={item.id} comment={item} onDeleteComment={onDeleteComment}/>;
      });
    } else {
      commentsTemplate = <li>Нет комментариев</li>;
    }
    return <ul>{commentsTemplate}</ul>;
  }
}

export { CommentsList };
