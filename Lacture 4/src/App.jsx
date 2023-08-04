import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Home from "./components/Home"
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
