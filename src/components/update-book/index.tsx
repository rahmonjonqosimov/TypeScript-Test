import React, { useEffect, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { BookDataSchema } from "../../context/api/api";
import { apiSlice } from "../../context/api/api";
import "./index.scss";

interface UpdateBookProps {
  data: BookDataSchema;
  updateFunction: React.Dispatch<React.SetStateAction<BookDataSchema | null>>;
}

const UpdateBook: React.FC<UpdateBookProps> = ({ data, updateFunction }) => {
  const [updateBook, { isLoading, isSuccess }] =
    apiSlice.useUpdateBookMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, name } = e.target;
    updateFunction((p: any) => ({ ...p, [name]: value }));
  };

  const handleUpdateBook = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const updateData: BookDataSchema = {
    //   author: data.author,
    //   cover: data.cover,
    //   isbn: data.isbn,
    //   pages: data.pages,
    //   published: data.published,
    //   title: data.title,
    // };
    updateBook(data);
    // console.log(updateData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Updated Successfully!");
      updateFunction(null);
    }
  }, [isSuccess]);

  return (
    <form className="update-form" onSubmit={handleUpdateBook}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={data.title}
        onChange={handleChange}
        name="title"
      />
      <label htmlFor="author">Author</label>
      <input
        id="author"
        type="text"
        value={data.author}
        onChange={handleChange}
        name="author"
      />
      <label htmlFor="cover">Cover</label>
      <input
        id="cover"
        type="text"
        value={data.cover}
        onChange={handleChange}
        name="cover"
      />
      <label htmlFor="published">Published</label>
      <input
        id="published"
        type="text"
        value={data.published}
        onChange={handleChange}
        name="published"
      />
      <label htmlFor="pages">Pages</label>
      <input
        id="pages"
        type="text"
        value={data.pages}
        onChange={handleChange}
        name="pages"
      />
      <div className="btns">
        <button type="button" onClick={() => updateFunction(null)}>
          Close
        </button>
        <button>{isLoading ? "Loading..." : "Submit"}</button>
      </div>
    </form>
  );
};

export default UpdateBook;
