import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="mainbox">
      <div className="err">4</div>
      <i className="far fa-question-circle fa-spin"></i>
      <div className="err2">4</div>
      <div className="msg">
        Maybe this page moved? Got deleted?
        <p>
          Let's go{" "}
          <p
            className="goHome"
            onClick={() => {
              navigate = "/";
            }}
          >
            home
          </p>{" "}
          and try from there.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
