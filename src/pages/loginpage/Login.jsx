import { useState } from "react";
import "./Login.css";
import step from "/StepContent.png";

export default function Login() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
    };
    console.log(user);
  };

  return (
    <div className="around">
      <div className="loginForm">
        <div className="steps">
          <img src={step} alt="Login steps" />
        </div>
        <div className="fillForm">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                labelName="Name"
                placeholder="e.g. Stephen King"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div>
              <Field
                labelName="Email Address"
                placeholder="e.g. stephenking@lorem.com"
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
              />
            </div>
            <div>
              <Field
                labelName="Phone Number"
                placeholder="e.g. +1 234 567 890"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>

            <button type="submit">Next Step</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function Field({ labelName, placeholder, onChange }) {
  return (
    <div className="loginInputs">
      <label>{labelName}</label>
      <input onChange={onChange} type="text" placeholder={placeholder} />
    </div>
  );
}
