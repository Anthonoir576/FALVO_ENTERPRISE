import React, 
      { useContext }    from "react";

import { ThemeContext } from "../../context/ThemeContext";



const DarkMode = () => {

  const {changeTheme, theme} = useContext(ThemeContext);

  return (
    <li className="btn-darkMODE">
      <div className="slideDark">
        <input
          type="checkbox"
          value="None"
          id="slideDarkMode"
          name="check"
          defaultChecked
          onClick={changeTheme}
        />
        <label htmlFor="slideDarkMode"></label>
      </div>
    </li>
  );
};

export default DarkMode;
