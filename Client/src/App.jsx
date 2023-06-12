import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Shope from "./pages/Shope"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Carts from "./pages/Cart"

function App() {




  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="Shope" element={<Shope />} />
          <Route path="Carts" element={<Carts />} />

        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
