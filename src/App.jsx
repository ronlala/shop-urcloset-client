import { useState ,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Addnewitem from "./components/Addnewitem";
import Closet from "./components/Closet";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/cart";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Itemcard from "./components/Itemcard";
import "./styles.css";

function App() {
  // const [user,setUser] = useState(JSON.parse(localStorage.getItem("user"))||{});
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : {};
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      return {};
    }
  });

 useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        {/* <Route path="/Signup" element={<Signup />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/closet" element={<Closet />} />
        <Route path= "/addnewitem" element={<Addnewitem/>}/> 
        <Route path= "/cart" element={<Cart/>} />
        <Route path= "/contact" element={<Contact/>} />
        <Route path= "/itemcard" element={<Itemcard/>} />
        {/* <Route path="/Update" element={<Update />} /> */}
      </Routes>
      {/* <Header />
      <About />
      <Addnewitem />
      <Closet />
      <Contact />
      <Home />
      <Itemcard />
      <Signup user={user} setUser={setUser} />
      <Login user={user} setUser={setUser} />
      <Cart /> */}

      <Footer />
    </div>
  );
}

export default App;
