import { Route, Routes } from "react-router-dom"
import LandingView from "./components/landing-view/LandingView"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingView />} />
    </Routes>
  )
}

export default App;
