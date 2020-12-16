export function addComment(comment) {
  return {
    type: "ADD_COMMENT",
    payload: comment,
  };
}

export function deleteComment(id) {
  return {
    type: "DELETE_COMMENT",
    payload: id,
  };
}

export function formChange(form) {
  return {
    type: "FORM_CHANGE",
    payload: form,
  };
}
