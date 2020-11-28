import React from "react";
import getTime from "./getTime";

class CommentsForm extends React.Component {
  state = {
    name: "",
    text: "",
  };

  handleChange = (e) => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };

  onBtnClickHandler = (e) => {
    e.preventDefault();
    const { name, text } = this.state;
    this.props.onAddComments({
      id: `id${(+new Date()).toString(16)}`,
      author: name,
      comment: text,
      time: getTime(),
    });
    this.setState({ name: "", text: "" });
  };

  validate = () => {
    const {name, text} = this.state;
    if (name.trim() && text.trim()) {
      return false
    } else {return true}
  }

  render() {
    const { name, text } = this.state;
    return (
      <form>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder={"Имя"}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Комментарий:
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            placeholder={"Комментарий"}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" onClick={this.onBtnClickHandler} disabled={this.validate()}>
          отправить
        </button>
      </form>
    );
  }
}
export { CommentsForm };
