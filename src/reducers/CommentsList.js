const comments = JSON.parse(localStorage.getItem("comments")) || [];

export const initialState = {
  comments,
};

export function listReducer(state = initialState, action) {
  switch (action.type) {
    case "DELETE_COMMENT":
      console.log(action, "qq");
      const targetId = action.payload.id;
      const storage = state.comments.filter((item) => item.id !== targetId);
      localStorage.setItem("comments", JSON.stringify(storage));

      return { ...state, comments: storage };

    case "ADD_COMMENT":
      const comments = state.comments.concat(action.payload);
      localStorage.setItem("comments", JSON.stringify(comments));
      return { ...state, comments };

    default:
      return state;
  }
}
