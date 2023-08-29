import "../App.css";
import Form from "../components/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({handleToken}) => {

  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [register, setRegister] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="contact-form">
      <Form register={register} setRegister={setRegister} username={username} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} newsletter={newsletter} setNewsletter={setNewsletter} handleToken={handleToken} />
    </div>
  );
};

export default SignUp;