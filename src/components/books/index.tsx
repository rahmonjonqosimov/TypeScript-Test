import React from "react";
import BooksNavbar from "../books-navbar";
import "./index.scss";
import BooksHero from "../books-hero";
import BooksWrapper from "../books-wrapper";
import { useGetBooksQuery } from "../../services/booksApi";

const BooksComponent = () => {
  const { data } = useGetBooksQuery("/books");
  console.log(data);

  return (
    <>
      <BooksNavbar />
      <BooksHero />
      <BooksWrapper />
    </>
  );
};

export default BooksComponent;
