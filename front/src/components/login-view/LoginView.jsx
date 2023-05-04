import React, { useState } from "react";

const LoginView = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLoginClick = (event) => {
    event.preventDefault();
    console.log(user, pass);
  };
  return (
    <form onSubmit={handleLoginClick}>
      <label>username</label>
      <input
        type="text"
        required
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <label>password</label>
      <input
        type="password"
        required
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button>clic</button>
    </form>
  );
};

export default LoginView;
