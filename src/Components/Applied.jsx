import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Applied = () => {
  const { googlePopUp } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    googlePopUp();
  };
  return (
    <div>
      Applied
      <button onClick={handleClick} className="btn">
        click
      </button>
    </div>
  );
};

export default Applied;
