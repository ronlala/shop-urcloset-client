function Footer(){
    return(
<div className="footer">
        <footer>
            {/* <!-- social media idcons , cookie settings  terms of use hot to and contact can be found here  --> */}
            <div className="footer_social_links">
              <ul>
                <li><a className="fa-brands fa-facebook-f"></a></li>
                <li> <a className="fa-brands fa-instagram"></a> </li>
                <li> <a className="fa-brands fa-x-twitter"></a> </li>
                <li> <a className="fa-brands fa-tiktok"></a> </li>
              </ul>
              
                
                
            </div>
            <div className="footer_menu">
                <a href="contact.html">contact us</a> 
                <a href="cookiesettings">cookie settings</a>
                <a href="tutorial"> How To</a>
                <a href="terms"> Terms of Use</a>
            </div>
        </footer>
    </div>
    )}
export default Footer;