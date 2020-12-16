import React from "react";
import { CommentsItem } from "./CommentsItem";
import { connect } from "react-redux";
import { deleteComment } from "../actions/actions";

class CommentsList extends React.Component {
  render() {
    const comment = this.props.data;
    const deleteComment = this.props.deleteComment;
    let commentsTemplate;
    if (comment && comment.length) {
      commentsTemplate = comment.map(function (item) {
        return (
          <CommentsItem
            key={item.id}
            comment={item}
            deleteComment={deleteComment}
          />
        );
      });
    } else {
      commentsTemplate = <li>Нет комментариев</li>;
    }
    return <ul>{commentsTemplate}</ul>;
  }
}

const mapStateToProps = (store) => {
  return {
    comments: store.list.com,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (comment) => dispatch(deleteComment(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
