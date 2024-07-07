import React, { useEffect, useState, MouseEvent } from "react";
import { deleteIcon, update } from "../../assets/images";
import Model from "../model";
import UpdateBook from "../update-book";
import { useDeleteBookMutation } from "../../services/booksApi";
interface BookDataSchema {
  author: string;
  cover: string;
  id: string;
  isbn: string;
  pages: string;
  published: string;
  title: string;
}
import { toast } from "react-toastify";
import Loading from "../loading";
const BooksCard: React.FC<{ data: null | BookDataSchema }> = ({ data }) => {
  const [updateBook, setUpdateBook] = useState<null | BookDataSchema>(null);
  const [deleteBook, { isSuccess, isLoading }] = useDeleteBookMutation();

  const closeFunction = () => {
    setUpdateBook(null);
  };

  const handleDeleteBookById: (id: string) => void = (id: string) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete")) {
      deleteBook(id);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book deleted successfully!");
    }
  }, [isSuccess]);

  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <div className="book__card">
        <h4>{data?.title}</h4>
        <ul>
          <li>Cover: {data?.cover}</li>
          <li>Pages: {data?.pages}</li>
          <li>Published: {data?.published}</li>
          <li>Isbn: {data?.isbn}</li>
        </ul>
        <div className="card__row">
          <p>Eben Upton / 2012</p>
          <span style={{ background: "#00FF29" }}>New</span>
        </div>
        <div className="btn__wrapper">
          <button
            onClick={() => handleDeleteBookById(data?.id)}
            style={{ background: "#FF4D4F" }}
          >
            <img src={deleteIcon} alt="delete-icon" />
          </button>
          <button style={{ background: "#6200EE" }}>
            <img src={update} alt="update-icon" />
          </button>
        </div>
      </div>
      {updateBook ? (
        <Model closeFunction={closeFunction}>
          <UpdateBook data={updateBook} updateFunction={setUpdateBook} />
        </Model>
      ) : (
        <></>
      )}
    </>
  );
};

export default BooksCard;
