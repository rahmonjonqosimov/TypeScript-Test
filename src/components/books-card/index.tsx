import React, { useEffect, useState } from "react";
import { deleteIcon, update } from "../../assets/images";
import Model from "../model";
import UpdateBook from "../update-book";

// import { toast } from "react-toastify";
import Loading from "../loading";
import { apiSlice } from "../../context/api/api";

interface CardProps {
  data: null | BookDataSchema | undefined;
}

import { BookDataSchema } from "../../context/api/api";
import { toast } from "react-toastify";
const BooksCard: React.FC<CardProps> = ({ data }) => {
  // --------  DELETE   --------------
  const [deleteBookById, { isSuccess, isLoading }] =
    apiSlice.useDeleteBookMutation();
  const handleDeleteBookById = (id: any) => {
    if (window.confirm("Are you sure you want to delete")) {
      deleteBookById(id);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Deleted Book successfully !");
    }
  }, [isSuccess]);

  // --------  UPDATE   --------------
  const [updateBook, setUpdateBook] = useState<any>(null);
  const closeFunction: () => void = () => {
    setUpdateBook(null);
  };

  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <div className="book__card">
        <h4 title={data?.title}>{data?.title}</h4>
        <ul>
          <li title={data?.cover}>Categories: {data?.cover}</li>
          <li title={data?.pages}>Pages: {data?.pages}</li>
          <li title={data?.published}>Published: {data?.published}</li>
          <li title={data?.isbn}>Isbn: {data?.isbn}</li>
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
          <button
            onClick={() => setUpdateBook(data)}
            style={{ background: "#6200EE" }}
          >
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
