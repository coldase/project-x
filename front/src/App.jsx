import { Outlet, Route, Routes } from "react-router-dom";
import Landing from "./components/landing-view/LandingView";
import Login from "./components/login-view/LoginView";
import User from "./components/user-view/UserView";
import NavBar from "./components/navbar/NavBar";

const NavRoutes = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route element={<NavRoutes />}>
          <Route path="/user" element={<User />} />
          <Route path="/user/:username" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
