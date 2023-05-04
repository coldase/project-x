import React, { useState } from "react";

const LoginView = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLoginClick = (event) => {
    event.preventDefault();
    console.log(user, pass);
    setUser("");
    setPass("");
  };
  return (
    <form onSubmit={handleLoginClick} className="flex justify-center pt-8">
      <label className="text-2xl">username</label>
      <input
        className="border border-emerald-300 rounded-sm text-red-600"
        type="text"
        required
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <label className="text-3xl">password</label>
      <input
        className="border border-gray-600 rounded-sm"
        type="password"
        required
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button className="text-4xl border border-green-500 rounded-lg">
        clic
      </button>
    </form>
  );
};

export default LoginView;
