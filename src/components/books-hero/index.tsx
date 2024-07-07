import React from "react";
import "./index.scss";

const BooksHero: React.FC = () => {
  return (
    <div className="books-hero">
      <div className="hero__text">
        <h1>
          You’ve got <span>7 book</span>{" "}
        </h1>
        <p>Your books today</p>
      </div>
      <button>+ Create a book</button>
    </div>
  );
};

export default BooksHero;
