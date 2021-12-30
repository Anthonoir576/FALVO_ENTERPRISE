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
          <Route exact path='/FALVO_ENTERPRISE/accueil' element={ <Accueil /> } />
          <Route exact path='/FALVO_ENTERPRISE/a_propos' element={ <APropos /> } />
          <Route exact path='/FALVO_ENTERPRISE/competence' element={ <Competence /> } />
          <Route exact path='/FALVO_ENTERPRISE/projets' element={ <Projets /> } />
          <Route exact path='/FALVO_ENTERPRISE/contact' element={ <Contact /> } />
          <Route path='*'                           element={ <Navigate replace to='/FALVO_ENTERPRISE/' /> } />
          <Route exact path='/FALVO_ENTERPRISE/'    element={ <Accueil /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;