import footerLogo from "../assets/footer-logo.png";
import "../css/footer.css";
function footer() {
  return (
    <footer className="footer">
      <div className="footer__header">
        <div className="footer__logo">
          <a href="/index.js">
            <img src={footerLogo} alt="Footer Logo" />
          </a>
        </div>

        <div className="footer__contacts">
          <h4>Contacts</h4>
          <div>
            <p>+1+86 852 346 000</p>
            <p>info@foodzero.com</p>
          </div>

          <div>
            <p>+1+86 852 346 000</p>
            <p>info@foodzero.com</p>
          </div>
        </div>

        <div className="footer__form">
          <h4>Never Miss a Recipe</h4>

          <form>
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn--primary">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default footer;
