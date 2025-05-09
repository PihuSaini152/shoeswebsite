import React from 'react';
import './footer.css';
import Usa from '/public/Footer/usa.jpg';
import Canda from '/public/Footer/canada.jpg';
import Us from '/public/Footer/australian.jpg';
import Eg from '/public/Footer/england.jpg';
import China from '/public/Footer/china.jpg';
import Jp from '/public/Footer/japan.jpg';
import Sk from '/public/Footer/south koria.jpg';
import Uae from '/public/Footer/UAE.jpg';
import Unkow from '/public/Footer/unknown.jpg';
import Ger from '/public/Footer/german.jpg';
import Lux from '/public/Footer/luxamberg.jpg';
import Eu from '/public/Footer/EU.jpg';
import Ind from '/public/Footer/india.jpg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Help</h4>
          <p>1-888-963-8944</p>
          <p>1-814-251-9966 (Text)</p>
          <p>help@allbirds.com</p>
          <p>Returns/Exchanges</p>
          <p>FAQ/Contact Us</p>
          <p>Afterpay</p>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <p>Men's Shoes</p>
          <p>Women's Shoes</p>
          <p>Men's Apparel</p>
          <p>Women's Apparel</p>
          <p>Socks</p>
          <p>Gift Cards</p>
          <p>Refer a Friend</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <p>Our Stores</p>
          <p>Our Story</p>
          <p>Our Materials</p>
          <p>Sustainability</p>
          <p>Investors</p>
          <p>Shoe Care</p>
          <p>Affiliates</p>
          <p>Bulk Orders</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Responsible Disclosure</p>
          <p>California Transparency Act</p>
          <p>Community Offers</p>
          <p>Our Blog</p>
          <p>Patents</p>
        </div>
      </div>

      <div className="footer-follow-flags">
        <div className="footer-follow">
          <h4>Follow the Flock</h4>
          <p>
            Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild.
            Oh, we have cute sheep, too. #allbirds
          </p>
          <div className="footer-socials">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <img src="/images/bcorp.png" alt="B Corporation Logo" className="bcorp-logo" />
          </div>
        </div>

        <div className="footer-flags">
        <img src={Usa} alt="USA" />
          <img src={Canda} alt="Canada" />
          <img src={Us} alt="Australia" />
          <img src={Eg} alt="England" />
          <img src={China} alt="China" />
          <img src={Jp} alt="Japan" />
          <br />
          <img src={Sk} alt="South Korea" />
          <img src={Uae} alt="UAE" />
          <img src={Unkow} alt="Unknown" />
          <img src={Ger} alt="Germany" />
          <img src={Lux} alt="Luxembourg" />
          <img src={Eu} alt="EU" />
          <img src={Ind} alt="India" />
         
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility</p>
        <p>Do Not Sell My Personal Information</p>
      </div>
    </footer>
  );
};

export default Footer;
