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
              <div>
                <button className='header-button-reverse red'
                  onClick={() => {
                    handleToken(null);
                  }}
                >
                  Déconnexion
                </button>
                <button className='header-button-reverse'><Link to="/publish" >Vends tes articles</Link></button>
              </div>
            ) : (
              <>
                <button className='header-button'><Link to="/signup" >S'inscrire</Link></button>
                <button className='header-button'><Link to="/login" >Se connecter</Link></button>
              </>
            )}
        </div>
    </header>
  )
}

export default Header