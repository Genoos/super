import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
  // user: null,
  user: {
    _id: { $oid: "623222e955f7e7e87c6f6bf3" },
    username: "user7",
    email: "user7@gmail.com",
    password: "$2b$10$wQMrRsgSqsYn4GcshCMFouJPi3ih6gsu6cfCq6b6ZYuYFKJnuVRgi",
    profilePicture: "1.jpeg",
    coverPicture: "3.jpeg",
    isAdmin: false,
    followers: ["61a3c13cb28c9326b8f9f4e8", "61ae3f838a832c30d18d9bf8"],
    following: ["61ae3f838a832c30d18d9bf8", "61a3c13cb28c9326b8f9f4e8"],
    createdAt: { $date: { $numberLong: "1647452905261" } },
    updatedAt: { $date: { $numberLong: "1647452905261" } },
    __v: { $numberInt: "0" },
  },
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
