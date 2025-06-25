import { Link } from "react-router-dom";

function Header(){
    return(
<div >
            <div >
               <ul className="header_navigation_left">
                <li> <Link to="/closet">Closet</Link> </li>
                <li><Link to="/about">About</Link> </li>
                {/* <li><Link to="/itemcard ">itemcard</Link> </li> */}
                <li><Link to= "/wearcart" className="fa-solid fa-shirt">Wear</Link> </li>
               </ul>
           </div>  
           <div className="header_navigation">
            <img src="public/images/logo.png" alt="logo picture that says shop your clothes with a symbol of a hanger "/>
           </div>
           
           <div >
              <ul className="header_navigation_right">
                <li>  <form action="">
                   <label htmlFor="Search">Search</label>
                   <input type="Search Closet" name="Search Closet" id="Search Closet" placeholder="Search Closet"/>
                </form></li>
                
                <li> <Link to="login" className="fa-solid fa-circle-user">Login</Link> </li>
              </ul>   
           </div>
</div>

)}
export default Header;