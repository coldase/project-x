import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing-view/LandingView";
import Login from "./components/login-view/LoginView";
import User from "./components/user-view/UserView";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
