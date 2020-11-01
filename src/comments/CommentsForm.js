import React from "react";
import getTime from "./getTime";

export default function CommentForm() {

  return (
    <form onSubmit={commentAdd}>
      <label>
        Имя:
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Комментарий:
        <input type="text" name="text" id="text" />
      </label>
      <button type="submit">отправить</button>
    </form>
  );

function commentAdd(ev) {
  ev.preventDefault();
  let name = document.querySelector("#name");
  let text = document.querySelector("#text");
  if (name.value.trim() && text.value.trim()) {
    let storage = JSON.parse(localStorage.getItem("comments")) || [];
    storage.push({
      authorName: name.value,
      commentText: text.value,
      commentTime: getTime(),
    });
    storage.map((item, index) => {return item.id = index;})
    localStorage.setItem("comments", JSON.stringify(storage));
    console.log(storage);
  } else {
    alert("Нужно заполнить оба поля");
  }
}
}