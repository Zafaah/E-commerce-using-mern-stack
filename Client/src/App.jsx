import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Shope from "./pages/Shope"
import Carts from "./pages/Carts"
import Profile from "./pages/Profile"
import CartsLIst from "./components/CartsLIst"
import { useState } from "react"
function App() {
  const User = "user"



  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={User == "admin" ? <Dashboard /> : <Home />} />
          <Route path="Shope" element={<Shope />} />
          <Route path="Carts" element={<Carts />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
