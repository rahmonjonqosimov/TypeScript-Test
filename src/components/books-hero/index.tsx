import React, { useState } from "react";
import "./index.scss";
import Model from "../model";
import CreateBook from "../create-book";

const BooksHero: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const closeFunction: () => void = () => {
    setShow(false);
  };
  return (
    <>
      <div className="books-hero">
        <div className="hero__text">
          <h1>
            You’ve got <span>7 book</span>{" "}
          </h1>
          <p>Your books today</p>
        </div>
        <button onClick={() => setShow(true)}>+ Create a book</button>
      </div>
      {show ? (
        <Model closeFunction={closeFunction}>
          <CreateBook setShow={setShow} />
        </Model>
      ) : (
        <></>
      )}
    </>
  );
};

export default BooksHero;
