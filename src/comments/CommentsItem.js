import React from "react";
import styles from "./commentsItemStyle.module.css";

class CommentsItem extends React.Component {
  handleDel = (e) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    this.props.deleteComment({
      id,
    });
  };

  render() {
    const { comment } = this.props;
    return (
      <li className={styles.comment}>
        <h2 className={styles.comment__author}>{comment.author}</h2>
        <p className={styles.comment__text}>{comment.comment}</p>
        <div className={styles.comment__infoWrapper}>
          <span className={styles.comment__time}>{comment.time}</span>
          <button
            className={styles.comment__deleteButton}
            id={comment.id}
            onClick={this.handleDel}
          >
            удалить
          </button>
        </div>
      </li>
    );
  }
}

export { CommentsItem };
