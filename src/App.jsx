import About from './components/About'
import Addnewitem from './components/Addnewitem'
import Closet from './components/Closet'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Cart from './components/cart'
import Header from './shared/Header'
import Footer from './shared/Footer'
import Itemcard from './components/itemcard'



function App() {
 const [user,setUser] = useState(JSON.parse(localStorage.getItem("user"))||{});

  return (
    <div>
      <header user={user} setUser={setUser}/>
  <Routes>
     <Route path="/" element={ <Home/>} />
    <Route path= "/about" element={<About/>} />
    <Route path= "/admin" element={<Admin/>} />
    <Route path= "/Create" element={<Create/>} />
    <Route path= "/Signup" element={<Signup/>} />
    <Route path= "/Login" element={<Login/>} />
    <Route path= "/Update" element={<Update/>} />
  </Routes>
  <Header />
  <About />
 <Addnewitem />
 <Closet />
 <Contact />
 <Home />
 <Itemcard />
 <Signup user={user} setUser={setUser}/>
 <Login user={user} setUser={setUser}/>
 <Cart />

 <Footer />

 </div>
  );
}


export default App
