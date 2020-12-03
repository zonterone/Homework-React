import React from "react";
import getTime from "./getTime";
import style from "./commentsFormStyle.module.css"

class CommentsForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "",
        text: "",
      };
  }

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
    return !(name.trim() && text.trim())
  }

  render() {
    const { name, text } = this.state;
    return (
      <form className={style.form}>
        <label className={style.form__label}>
          Имя:
          <input
            className={style.form__nameInput}
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder={"Имя"}
            onChange={this.handleChange}
          />
        </label>
        <label className={style.form__label}>
          Комментарий:
          <textarea
            className={style.form__textInput}
            type="text"
            name="text"
            id="text"
            value={text}
            placeholder={"Комментарий"}
            rows="5"
            onChange={this.handleChange}
          />
        </label>
        <button
          className={style.form__submitButton}
          type="submit"
          onClick={this.onBtnClickHandler}
          disabled={this.validate()}
        >
          отправить
        </button>
      </form>
    );
  }
}
export { CommentsForm };
