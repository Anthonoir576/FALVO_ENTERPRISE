import Accueil from "./pages/Accueil";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/accueil' element={<Accueil />} />
          <Route path='*' element={ <Navigate replace to='/accueil' /> }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;