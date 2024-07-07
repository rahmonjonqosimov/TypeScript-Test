import React, { useEffect } from "react";
import "./index.scss";

const Model = ({ closeFunction, children }) => {
  // useEffect(() => {}, [])
  return (
    <>
      <div onClick={closeFunction} className="model__owerlay"></div>
      <div className="model">{children}</div>
    </>
  );
};

export default Model;
