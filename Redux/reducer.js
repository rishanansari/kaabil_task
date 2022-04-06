let initialState = {
    auth: false,
    token : null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "auth":
        return { ...state, auth: action.payload };
      case "token":
        return { ...state, token: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  