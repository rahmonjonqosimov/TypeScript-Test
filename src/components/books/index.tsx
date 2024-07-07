import React, { useState } from "react";
import BooksNavbar from "../books-navbar";
import "./index.scss";
import BooksHero from "../books-hero";
import BooksWrapper from "../books-wrapper";

const BooksComponent: React.FC = () => {
  const [booksCount, setBooksCount] = useState<number>(0);
  return (
    <>
      <BooksNavbar />
      <BooksHero booksCount={booksCount} />
      <BooksWrapper setBooksCount={setBooksCount} />
    </>
  );
};

export default BooksComponent;
