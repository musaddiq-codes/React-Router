import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./About"
import Contacts from "./Contacts"
import Home from "./Home"
import './App.css'
import Error from "./Error"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
