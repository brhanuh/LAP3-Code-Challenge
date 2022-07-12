const initState = [
  {
    username: "brhanuh",
  },
];

function RepoReducer(state = initState, action) {
  switch (action.type) {
    case "ADD":
      return action.payload;
    default:
      return state;
  }
}

export default RepoReducer;
