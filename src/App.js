import React from "react";
import { connect } from "react-redux";
import CommentsList from "./comments/CommentsList";
import { CommentsForm } from "./comments/CommentsForm";
import { addComment, formChange } from "./actions/actions";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CommentsForm
          addComment={this.props.addComment}
          formChange={this.props.formChange}
          data={this.props.form}
        />
        <CommentsList data={this.props.comments} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    comments: store.list.comments,
    form: store.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    formChange: (form) => dispatch(formChange(form)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
