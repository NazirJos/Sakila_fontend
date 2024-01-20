import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Actor from "./pages/Actor"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actor" element={<Actor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App