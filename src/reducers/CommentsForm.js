export const initialState = {
  name: "",
  text: "",
};

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case "FORM_CHANGE":
      return { ...state, ...action.payload };
      
    default:
      return state;
  }
}