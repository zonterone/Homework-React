import React from "react";

class CommentsItem extends React.Component {
  onDelClickHandler = (e) => {
    e.preventDefault();
    const { id } = this.props.comment;
    this.props.onDeleteComments({
      id: id
    });
  };

  render() {
    const { comment } = this.props;
    return (
      <li>
        <h2>{comment.author}</h2>
        <p>{comment.comment}</p>
        <span>{comment.time}</span>
        <button id={comment.id} onClick={this.onDelClickHandler}>
          удалить
        </button>
      </li>
    );
  }
}

export { CommentsItem };
