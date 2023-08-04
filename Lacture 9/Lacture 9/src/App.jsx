import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./About"
import Contacts from "./Contacts"
import MainHeader from "./MainHeader"
import './App.css'
import Error from "./Error"
import Home from "./Home"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />} >
            <Route index element={<Home />} />
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
