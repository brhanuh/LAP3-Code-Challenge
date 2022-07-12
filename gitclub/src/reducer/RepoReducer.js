function RepoReducer(state = [], action) {
  switch (action.type) {
    case "ADD":
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export default RepoReducer;
