import { createContext, useState } from "react";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  const [persist, setPersist] = useState(localStorage.getItem("persist") ||false);

  return (
    <AuthContext.Provider value={{auth, setAuth, persist, setPersist}}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;