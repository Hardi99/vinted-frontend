import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Cookies from "js-cookie";

//Pages
import Home from './pages/Home'
import Offer from "./pages/Offer";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Header from './components/Header';
import Publish from './pages/Publish';

function App() {
  // State dans lequel je stocke le token. Sa valeur de base sera :
  // - Je je trouve un cookie token, ce cookie
  // - Sinon, null
  const [token, setToken] = useState(Cookies.get("token") || null);

  const [search, setSearch] = useState("");

  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  return (
    <Router>
    {/* Je peux passer des props à mes composants */}
    <Header
      token={token}
      handleToken={handleToken}
      search={search}
      setSearch={setSearch}
    />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/offers/:id" element={<Offer />} />
        <Route path="/signup" element={<SignUp handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/publish" element={<Publish token={token} />} />
      </Routes>
    </Router>
  )
}

export default App;
