import { useState } from "react";

import styles from "./signin-chat-form.module.css";

const SigninChatForm = ({ onSubmit }) => {
  const [state, setState] = useState({ name: "" });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ name: "" });
  };

  const { name } = state;

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        name="name"
        onChange={handleChange}
        placeholder="Enter your name"
        required
      />
      <button>Connect</button>
    </form>
  );
};

export default SigninChatForm;
