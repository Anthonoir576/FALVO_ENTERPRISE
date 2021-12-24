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
          <Route exact path='/'    element={ <Accueil /> } />
          <Route exact path='/'   element={ <APropos /> } />
          <Route exact path='/' element={ <Competence /> } />
          <Route exact path='/'    element={ <Projets /> } />
          <Route exact path='/'    element={ <Contact /> } />
          <Route path='*'                 element={ <Navigate replace to='/Accueil' /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;