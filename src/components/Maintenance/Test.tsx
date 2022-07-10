import React from "react";

const Test = () => {
  return (
    <div className="standBy">
      <p className="standByP1">
        En cours de test <br /> Back-end...{" "}
      </p>
      <p className="standByP2">
        {" "}
        <i className="fas fa-spinner"></i>{" "}
      </p>
    </div>
  );
};

export default Test;
