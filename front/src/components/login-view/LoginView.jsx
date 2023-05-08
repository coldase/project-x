import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = (event) => {
    event.preventDefault();
    console.log(user, pass);
    if (user === "pekka" && pass == "kakka12") {
      navigate("/user");
    } else {
      alert("BE ALERT! THE WORLD NEED MORE LERTS! (wrong pass and/or user)");
    }
    setUser("");
    setPass("");
  };
  return (
    <>
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
      <div>
        <h1 className="flex justify-center pt-20 text-3xl text-white hover:text-black">
          pekka kakka12
        </h1>
      </div>
    </>
  );
};

export default LoginView;
