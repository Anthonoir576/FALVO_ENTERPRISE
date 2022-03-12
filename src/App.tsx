import Accueil               from "./pages/Accueil.js";
import APropos               from "./pages/APropos.js";
import Competence            from "./pages/Competence.js";
import Projets               from "./pages/Projets.js";
import Contact               from "./pages/Contact.js";
import ThemeContextProvider  from "./context/ThemeContext.js";

import { Routes, 
         Route,
         BrowserRouter,
         Navigate }          from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Routes>
          <Route path='/accueil' element={ <Accueil /> } />
          <Route path='/a_propos' element={ <APropos /> } />
          <Route path='/competence' element={ <Competence /> } />
          <Route path='/projets' element={ <Projets /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='*' element={ <Navigate replace to='/FALVO_ENTERPRISE/' /> } />
          <Route path='/FALVO_ENTERPRISE/' element={ <Accueil /> } />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;