import Accueil    from "./pages/Accueil";
import APropos    from "./pages/APropos";
import Competence from "./pages/Competence";
import Projets    from "./pages/Projets";
import Contact    from "./pages/Contact";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/Accueil' element={ <Accueil /> } />
          <Route exact path='/A_propos' element={ <APropos /> } />
          <Route exact path='/Competence' element={ <Competence /> } />
          <Route exact path='/Projets' element={ <Projets /> } />
          <Route exact path='/Contact' element={ <Contact /> } />
          <Route path='*' element={ <Navigate replace to='/Accueil' /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;