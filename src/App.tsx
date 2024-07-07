import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/sign-in";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpPage from "./pages/sign-up";
import BooksPage from "./pages/books";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
