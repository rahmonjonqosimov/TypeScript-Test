import React from "react";
import BooksCard from "../books-card";
import { apiSlice, BookDataSchema } from "../../context/api/api";
import "./index.scss";
import BooksSkeleton from "../books-skeleton";
const BooksWrapper: React.FC = () => {
  const { data, isLoading } = apiSlice.useGetBooksQuery();

  const books = data?.map((book: BookDataSchema) => (
    <BooksCard data={book} key={book.id} />
  ));
  return (
    <>
      {isLoading ? <BooksSkeleton /> : <></>}
      <div className="books__wrapper">{books}</div>
    </>
  );
};

export default BooksWrapper;
