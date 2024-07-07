import React from "react";
import BooksNavbar from "../books-navbar";
import "./index.scss";
import BooksHero from "../books-hero";
import BooksWrapper from "../books-wrapper";

const BooksComponent: React.FC = () => {
  return (
    <>
      <BooksNavbar />
      <BooksHero />
      <BooksWrapper />
    </>
  );
};

export default BooksComponent;
