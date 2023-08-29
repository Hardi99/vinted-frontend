import '../App.css'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

function Header({ token, handleToken, search, setSearch }) {

  return (
    <header>
        <div className='container header'>
            <img src={logo} alt="" />
            <input
              type="text"
              value={search}
              placeholder="Rechercher des articles"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            {token ? (
              <button
                onClick={() => {
                  handleToken(null);
                }}
              >
                Déconnexion
              </button>
            ) : (
              <>
                <Link to="/signup">S'inscrire</Link>
                <Link to="/login">Se connecter</Link>
              </>
            )}
        </div>
    </header>
  )
}

export default Header