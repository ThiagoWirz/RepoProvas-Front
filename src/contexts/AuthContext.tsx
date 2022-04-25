import { createContext, useState } from "react";

const AuthContext = createContext<any | undefined>(undefined);

export function AuthProvider({ children }: any) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth") as string);
  const [auth, setAuth] = useState(persistedAuth);

  function setAuthData(authData: any) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  return (
    <AuthContext.Provider value={{ auth, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
