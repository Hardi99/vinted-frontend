import Cookies from "js-cookie";
import "../App.css";
import axios from "axios";
import { useState } from "react";

// J'utilise le destructuring de props pour ne pas répéter props.example
const Form = ({username, password, email, newsletter, setNewsletter, setName, setEmail, setPassword, handleToken}) => {

  const [errorMessage, setErrorMessage] = useState('');

    const handleNameChange = event => {
        const value = event.target.value;
        setName(value);
    };

    const handleEmailChange = event => {
        const value = event.target.value;
        setEmail(value);
    };

    const handlePasswordChange = event => {
        const value = event.target.value;
        setPassword(value);
    };

    const handleNewsletterChange = () => {
        setNewsletter(!newsletter);
    };

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        try {
          //   Je fais disparaitre le message d'erreur
          setErrorMessage("");
          //   Requête axios :
          // - Premier argument : l'url que j'interroge
          // - deuxième : le body que j'envoi
          console.log(username, email, password, newsletter)
          const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/signup",
            {
              email, // email : email
              username,
              password,
              newsletter: newsletter,
            }
          );
          console.log(response.data);
          // J'enregistre le token dans mon state et mes cookies
          handleToken(response.data.token);
          navigate("/");
        } catch (error) {
          // console.log(error.response.data); // Pour voir le message d'erreur transmis par le serveur
          console.log(error); // Pour voir le status de la réponse
          // Si je reçois le message "This email already has an account"
          if (
            error.response.data.message ===
            "This email already has an account"
          ) {
            // Je met à jour mon state errorMessage
            setErrorMessage(
              "Ce mail est déjà utilisé, veuillez en choisir un autre :)"
            );
          } else if (error.response.data.message === "Missing parameters") {
            setErrorMessage("Veuillez remplir tous les champs :)");
          }
        }
      }}
    >
        <p>S'inscrire</p>
        <input
          placeholder="Name"
          type="text"
          name="email"
          value={username}
          onChange={handleNameChange}
        />

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

        <div className="final-form">
            <div>
                <input
                placeholder="Password"
                type="checkbox"
                checked={newsletter}
                value="S'inscrire à notre newsletter"
                onChange={handleNewsletterChange}
                />
                <p>S'inscrire à notre newsletter</p>
            </div>

            <p>En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de Confidentialité de Vinted. Je confirme avoir au moins de 18 ans.</p>
        </div>
        <input type="submit" value="Register" className="confirm" />
      </form>
  );
};

export default Form;