import React, { useState, useContext } from "react";
import { LoginContext } from "../shared/loginContext";

function Thankyou() {
  const [cinfo, setCinfo] = useContext(LoginContext);

  let emailParse = cinfo.email;
  let name = "";
  if (emailParse) {
    name = emailParse.substring(0, emailParse.indexOf("@"));
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row mt-5 pagename">
          <h1>Hello! {name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
