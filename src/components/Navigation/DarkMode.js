import React from "react";

const DarkMode = () => {
  return (
    <li>
      <div className="slideDark">
        <input
          type="checkbox"
          value="None"
          id="slideDarkMode"
          name="check"
          defaultChecked
        />
        <label htmlFor="slideDarkMode"></label>
      </div>
    </li>
  );
};

export default DarkMode;
