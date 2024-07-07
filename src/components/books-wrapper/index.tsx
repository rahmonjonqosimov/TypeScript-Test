import React from "react";
import BooksCard from "../books-card";
import { useGetBooksQuery } from "../../services/booksApi";

interface BookDataSchema {
  author: string;
  cover: string;
  id: string;
  isbn: string;
  pages: string;
  published: string;
  title: string;
}

import "./index.scss";
import BooksSkeleton from "../books-skeleton";
const BooksWrapper: React.FC = () => {
  const { data, isLoading } = useGetBooksQuery();
  const isLoading: any;

  const books = data?.map((book: BookDataSchema) => (
    <BooksCard key={book.id} data={book} />
  ));
  return (
    <>
      {isLoading ? <BooksSkeleton /> : <></>}
      <div className="books__wrapper">{books}</div>
    </>
  );
};

export default BooksWrapper;
