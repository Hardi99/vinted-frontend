import "../App.css";
import Form from "../components/Form";
import { useState } from "react";

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscribed, setSubscribed] = useState("");
  const [register, setRegister] = useState(false);

  return (
    <div className="contact-form">
      <Form register={register} setRegister={setRegister} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} subscribed={subscribed} setSubscribed={setSubscribed} />
    </div>
  );
};

export default SignUp;