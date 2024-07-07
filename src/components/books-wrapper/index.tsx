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
  const { data, isLoading, isFetching } = apiSlice.useGetBooksQuery();
  const value = useSelector((s: RootState) => s.search.value);

  const [filterBooks, setFilterBooks] = useState<
    BookDataSchema[] | undefined
  >();

  useEffect(() => {
    setFilterBooks(
      data?.filter((book) =>
        book.title.toLowerCase().includes(value?.trim()?.toLowerCase())
      )
    );
    setBooksCount(value?.trim() ? filterBooks?.length : data?.length);
  }, [value, isFetching]);

  const books: JSX.Element[] | undefined = (
    value?.trim().length ? filterBooks : data
  )?.map((book: BookDataSchema) => <BooksCard data={book} key={book.id} />);
  return (
    <>
      {isLoading ? <BooksSkeleton /> : <></>}
      <div className="books__wrapper">{books}</div>
    </>
  );
};

export default BooksWrapper;
