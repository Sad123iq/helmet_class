import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Products from "./pages/Products";

function App() {

  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    </Routes>
    </>
  )
}

export default App
