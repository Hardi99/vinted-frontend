import "../App.css";
import Cookies from 'js-cookies'

// J'utilise le destructuring de props pour ne pas répéter props.example
const Form = ({name, password, email, subscribed, setSubscribed, setName, setEmail, setPassword, register, setRegister}) => {

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

    const handleSubscribedChange = event => {
        const value = event.target.value;
        setSubscribed(value);
    };

  const handleSubmit = event => {
     // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    event.preventDefault();
    // Vérifier que les 2 password sont identiques
    if (password, name, email) {
      // J'affiche une alerte et je change la valeur du state de Register
      alert("Vous avez crée un compte !!!")
      setRegister(!register);
      console.log(!register);
      const token = "fSFBIbI3XtZyF79i";
      Cookies.set("token", token);
      console.log(Cookies);
    } else {
        alert("Il y a un problème")
    }
  };

  return (
      <form onSubmit={handleSubmit} style={register === true ? {display: 'none'} : {display: 'flex'}}>
        <p>S'inscrire</p>
        <input
          placeholder="Name"
          type="text"
          name="email"
          value={name}
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
                name="subscribed"
                value="S'inscrire à notre newsletter"
                onChange={handleSubscribedChange}
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