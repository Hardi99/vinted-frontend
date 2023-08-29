import Cookies from "js-cookie";
import "../App.css";
import { useState } from "react";
import axios from "axios";

// J'utilise le destructuring de props pour ne pas répéter props.example
const FormLogin = ({password, email, setEmail, setPassword, navigate}) => {

    const [isLogin, setIsLogin] = useState(false)

    const handleEmailChange = event => {
        const value = event.target.value;
        setEmail(value);
    };

    const handlePasswordChange = event => {
        const value = event.target.value;
        setPassword(value);
    };

  const handleSubmit = async event => {
     // Pour empêcher le navigateur de recharger la page lors de la soumission du formulaire
    event.preventDefault();

    // Vérifier que les champs sont remplis
    if (password,email) {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login"
        );
      Cookies.set("userToken", response.data.token);
      setToken(response.data.token);
      navigate("/");
      /* setIsLogin(true) */
    } else {
        alert("Il y a un problème")
    }
  };

  return (
      <form 
        onSubmit={async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/login",
            {
              email,
              password,
            }
          );
          console.log(response.data);
          handleToken(response.data.token);
          navigate("/");
        } catch (error) {
          // console.log(error.message);
          console.log(error.response.data);
        }
      }}>
        <p>Se connecter</p>

        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input type="submit" value="Register" className="confirm" />
      </form>
  );
};

export default FormLogin;