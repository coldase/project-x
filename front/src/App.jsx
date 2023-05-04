import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing-view/LandingView";
import Login from "./components/login-view/LoginView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
