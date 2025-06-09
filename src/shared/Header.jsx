function Header(){
    return(
<div className="header_navigation">

           
      
      {/* <!-- Site menu and logo up here also the cart icon and login icon  -->      */}
      
            <div classname="header_navigation_left">
               <a href="closet.html">closet</a>
               <a href="about.html">about</a>
               <a href="login.html">login</a>
               <a href="wearcart.html">wearcart</a>
           </div>  
       

           <img src="public/images/logo.png" alt="logo picture that says shop your clothes with a symbol of a hanger "/>
           <div className="header_navigation_right">
               <form action="">
                   <label htmlFor="Search">Search</label>
                   <input type="Search Closet" name="Search Closet" id="Search Closet" placeholder="Search Closet"/>
                </form>
                <a href="wearcart.html" className="fa-solid fa-cart-shopping">Wear cart</a>
                <a href="login.html" className="fa-solid fa-circle-user">Login</a>
           </div>
       
           </div>

)}
export default Header;