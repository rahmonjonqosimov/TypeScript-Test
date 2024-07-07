import React from "react";
import "./index.scss";
interface PropsSchema {
  closeFunction: () => void;
  children: React.ReactNode;
}
const Model: React.FC<PropsSchema> = ({
  closeFunction,
  children,
}: PropsSchema) => {
  return (
    <>
      <div onClick={closeFunction} className="model__owerlay"></div>
      <div className="model">{children}</div>
    </>
  );
};

export default Model;
