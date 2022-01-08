import React, 
      { useContext }    from "react";
import { useEffect }    from "react/cjs/react.development";

import { ThemeContext } from "../../context/ThemeContext";



const DarkMode = () => {

  const {changeTheme, theme} = useContext(ThemeContext);

  useEffect(() => {
    
    if (theme) {
      document.body.classList.remove('darkTheme');
    } else if (!theme) {
      document.body.classList.add('darkTheme');
    }

  }, [theme]);

  return (
    <li className="btn-darkMODE">
      <div className="slideDark">
        <input
          type="checkbox"
          value="None"
          id="slideDarkMode"
          name="check"
          defaultChecked={theme ? true : false}
          onClick={changeTheme}
        />
        <label htmlFor="slideDarkMode"></label>
      </div>
    </li>
  );
};

export default DarkMode;
