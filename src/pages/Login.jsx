import "../App.css";
import FormLogin from "../components/FormLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="contact-form">
      <FormLogin handleToken={handleToken} navigate={navigate} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
    </div>
  );
};

export default Login;