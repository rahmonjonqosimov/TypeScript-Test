import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/sign-in";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpPage from "./pages/sign-up";
import BooksPage from "./pages/books";
import Auth from "./pages/auth";
import NotFound from "./pages/not-found";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<Auth />}>
          <Route path="/" element={<BooksPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
