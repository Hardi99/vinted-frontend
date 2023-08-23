import '../App.css'
import logo from '../assets/logo.png'

function Header() {

  return (
    <header>
        <div className='container header'>
            <img src={logo} alt="" />
            <input type="text" placeholder='Recherche des articles' />
            <nav>
                <button>S'inscrire</button>
                <button>Se connecter</button>
            </nav>
            <button>Vends tes articles</button>
        </div>
    </header>
  )
}

export default Header