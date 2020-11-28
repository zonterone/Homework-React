import React from "react";
import { CommentsList } from "./comments/CommentsList";

import { CommentsForm } from "./comments/CommentsForm";

class App extends React.Component {
  state = { data: "" };

  componentDidMount() {
    const comments = JSON.parse(localStorage.getItem("comments"));
    this.setState({ data: comments });
  }

  handleAddComment = (ev) => {
    if (this.state.data !== null) {
      const nextComm = [ev, ...this.state.data];
      this.setState({ data: nextComm });
      localStorage.setItem("comments", JSON.stringify(nextComm));
    } else {
      const nextComm = [ev];
      this.setState({ data: nextComm });
      localStorage.setItem("comments", JSON.stringify(nextComm));
    }
  };

  handleDeleteComment = (ev) => {
    let targetId = ev.target.id;
    let storage = this.state.data;
    localStorage.setItem(
      "comments",
      JSON.stringify(storage.filter((item) => item.id !== targetId))
    );
  };

  render() {
    return (
      <React.Fragment>
        <CommentsForm onAddComments={this.handleAddComment} />
        <CommentsList
          data={this.state.data}
          onDeleteComment={this.handleDeleteComment}
        />
      </React.Fragment>
    );
  }
}

export default App;
