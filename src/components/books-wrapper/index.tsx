import React, { useEffect, useState } from "react";
import BooksCard from "../books-card";
import { apiSlice, BookDataSchema } from "../../context/api/api";
import "./index.scss";
import BooksSkeleton from "../books-skeleton";
import { useSelector } from "react-redux";
import { RootState } from "../../context/store";

const BooksWrapper: React.FC<{
  setBooksCount: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setBooksCount }) => {
  const { data, isLoading } = apiSlice.useGetBooksQuery();
  const value = useSelector((s: RootState) => s.search.value);

  const [filterBooks, setFilterBooks] = useState<BookDataSchema[] | undefined>(
    data
  );

  useEffect(() => {
    if (data) {
      const filtered = data.filter((book) =>
        book.title.toLowerCase().includes(value?.trim()?.toLowerCase())
      );
      setFilterBooks(filtered);
      setBooksCount(value?.trim() ? filtered.length : data.length);
    }
  }, [value, data, setBooksCount]);

  const books: JSX.Element[] | undefined = filterBooks?.map(
    (book: BookDataSchema) => <BooksCard data={book} key={book.id} />
  );

  return (
    <>
      {isLoading ? <BooksSkeleton /> : <></>}
      <div className="books__wrapper">{books}</div>
    </>
  );
};

export default BooksWrapper;
