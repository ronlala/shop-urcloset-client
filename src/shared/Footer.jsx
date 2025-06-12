function Footer() {
  return (
    <div className="footer">
      <footer>
        {/* <!-- social media idcons , cookie settings  terms of use hot to and contact can be found here  --> */}
        <div>
          <ul className="footer_social_links">
            <li>
              <a className="fa-brands fa-facebook-f"></a>
            </li>
            <li>
              <a className="fa-brands fa-instagram"></a>{" "}
            </li>
            <li>
              <a className="fa-brands fa-x-twitter"></a>{" "}
            </li>
            <li>
              <a className="fa-brands fa-tiktok"></a>{" "}
            </li>
          </ul>
        </div>
        <div >
          <ul className="footer_menu">
            <li>
              <a href="contact.html">contact us</a>{" "}
            </li>
            <li>
              <a href="Cookie Settings">cookie settings</a>{" "}
            </li>
            <li>
              <a href="tutorial"> How To</a>{" "}
            </li>
            <li>
              <a href="terms"> Terms of Use</a>{" "}
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
