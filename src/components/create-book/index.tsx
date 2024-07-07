import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { fetchBookInfoByISBN } from "./createBooksApi";
import "./index.scss";
import { close, link } from "../../assets/images";
import { toast } from "react-toastify";

import { apiSlice } from "../../context/api/api";

interface CreateBookProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateBook: React.FC<CreateBookProps> = ({ setShow }) => {
  const [value, setValue] = useState<string>("9780451524935");
  const [createBook, { isLoading, isSuccess }] =
    apiSlice.useCreateBookMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCreateBook = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchBookInfoByISBN(value.trim())
      .then((book) => {
        if (book) {
          const newBook = {
            isbn: value,
            title: book.title,
            author: book.authors[0],
            published: book.publishedDate,
            pages: book.pageCount.toString(),
            cover: book.categories[0],
          };
          createBook(newBook);
        } else {
          toast.error("No information found :(");
        }
      })
      .catch(() => toast.error("No information found :("))
      .finally(() => {});
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("The book was created successfully :)");
      setShow(false);
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleCreateBook} className="create-book">
      <img
        className="close-icon"
        src={close}
        alt="Close"
        onClick={() => setShow(false)}
      />
      <h2>Create a book</h2>
      <label htmlFor="ISBN">ISBN</label>
      <div className="isbn__input">
        <input
          value={value}
          onChange={handleChange}
          type="text"
          id="ISBN"
          placeholder="_________"
        />
        <img src={link} alt="Link" className="link" />
      </div>
      <div className="btns">
        <button type="button" className="close" onClick={() => setShow(false)}>
          Close
        </button>
        <button disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default CreateBook;
