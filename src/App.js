
import Perfil from "./components/Perfil";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PerfilUm from "./components/ComponentePerfil1";
import Perfildois from "./components/ComponentePerfil2";
import PinterestLayout from "./components/PinterestLayout";
import Post from "./components/Post";
import Login from "./components/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Login/>}/>
                <Route path='/nav' element={<PinterestLayout />} />
                <Route path='/perfil' element={<Perfil />} />
                <Route path='/post' element={<Post/>} />
                <Route path="/ComponentePerfil1" element={<PerfilUm />} />
                <Route path="/ComponentePerfil2" element={<Perfildois />} />
            </Routes>
        </Router>
    );
}

export default App;