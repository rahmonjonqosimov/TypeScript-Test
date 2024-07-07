import React, { useEffect, ChangeEvent } from "react";
import "./index.scss";
import { useUpdateBookMutation } from "../../services/booksApi";
import { toast } from "react-toastify";

interface BookDataSchema {
  author: string;
  cover: string;
  id: string;
  isbn: string;
  pages: string;
  published: string;
  title: string;
}
interface UpdateBookProps {
  data: BookDataSchema;
  updateFunction: React.Dispatch<React.SetStateAction<BookDataSchema | null>>;
}

const UpdateBook: React.FC<UpdateBookProps> = ({ data, updateFunction }) => {
  const [updataBook, { isLoading, isSuccess }] = useUpdateBookMutation();
  console.log(data);
  const handleUpdateBook: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    e.preventDefault();
    updataBook({ body: data, id: data.id });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Updated book successfully");
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
        onChange={(e) =>
          updateFunction((prev: BookDataSchema) => ({
            ...prev,
            title: e.target.value,
          }))
        }
      />
      <label htmlFor="author">Author</label>
      <input
        id="author"
        type="text"
        value={data.author}
        onChange={(e) =>
          updateFunction((prev: BookDataSchema) => ({
            ...prev,
            author: e.target.value,
          }))
        }
      />
      <label htmlFor="cover">Cover</label>
      <input
        id="cover"
        type="text"
        value={data.cover}
        onChange={(e) =>
          updateFunction((prev: BookDataSchema) => ({
            ...prev,
            cover: e.target.value,
          }))
        }
      />
      <label htmlFor="published">Published</label>
      <input
        id="published"
        type="text"
        value={data.published}
        onChange={(e) =>
          updateFunction((prev: BookDataSchema) => ({
            ...prev,
            published: e.target.value,
          }))
        }
      />
      <label htmlFor="pages">Pages</label>
      <input
        id="pages"
        type="text"
        value={data.pages}
        onChange={(e) =>
          updateFunction((prev: BookDataSchema) => ({
            ...prev,
            pages: e.target.value,
          }))
        }
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
