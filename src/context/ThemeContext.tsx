import React, { createContext, useState } from "react";


export const ThemeContext = createContext(false);


const ThemeContextProvider = (props?: any) => {

  const [theme, setTheme] = useState(true);

  const changeTheme = () =>  {
    setTheme(!theme); 
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;