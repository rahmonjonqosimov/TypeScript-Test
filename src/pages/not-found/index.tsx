import React from "react";
import notFoundImg from "../../assets/images/imgs/404.png";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const handleReload: () => void = () => {
    window.location.reload();
  };
  return (
    <section id="not-found">
      <div className="container">
        <div className="not__found-img">
          <img src={notFoundImg} alt="" />
        </div>
        <div className="button__wrapper">
          <button onClick={() => navigate("/")}>Go Home Page</button>
          <button onClick={handleReload}>Reload Page</button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
