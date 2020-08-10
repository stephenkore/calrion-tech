import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [cinfo, setCinfo] = useState({
    email: "",
    password: "",
    emailError: "",
    phoneError: "",
  });

  return (
    <LoginContext.Provider value={[cinfo, setCinfo]}>
      {props.children}
    </LoginContext.Provider>
  );
};
