import Accueil               from "./pages/Accueil";
import APropos               from "./pages/APropos";
import Competence            from "./pages/Competence";
import Projets               from "./pages/Projets";
import Contact               from "./pages/Contact";
import ThemeContextProvider  from "./context/ThemeContext";

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