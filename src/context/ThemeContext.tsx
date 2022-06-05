
//- ########################################################
//- --------------------- IMPORT ---------------------------
//- ########################################################
import React, { createContext, useState } from "react";
//- --------------------------------------------------------
//- ########################################################




//* ########################################################
//* --------------------- CONTEXT --------------------------
//* ########################################################
//                      DARK  THEME
//* --------------------------------------------------------
const ThemeContextProvider = (props?: any) => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
//* --------------------------------------------------------
//* ########################################################




//~ ########################################################
//~ --------------------- EXPORT ---------------------------
//~ ########################################################
export const ThemeContext :any = createContext(true);
export default ThemeContextProvider;
//~ --------------------------------------------------------
//~ ########################################################