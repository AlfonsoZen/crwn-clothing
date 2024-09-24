import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home/Home.component"
import Nav from "./routes/Nav/Nav.component"

import './App.styles.scss'

const Shop = () => {
  return (
    <>
      <h1>I am the Shop</h1>
    </>
  )
}

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
