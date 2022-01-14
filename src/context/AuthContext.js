import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer.js";

const INITIAL_STATE = {
  user: null,
  // {
  //   _id: "61d695ca402da98b4352338a",
  //   username: "Shiva",
  //   email: "shiva@gmail.com",
  //   profilePicture:
  //     "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
  //   coverPicture: "https://wallpapercave.com/wp/wp3246083.jpg",
  //   isAdmin: false,
  //   followers: [],
  //   followings: [],
  //   desc: "Hello welcome to my page",
  //   city: "Himalayas",
  //   from: "Chennai",
  // },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
