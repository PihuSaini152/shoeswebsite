import React from 'react';
import './footer.css';
import Usa from '/usa.jpg'
import Canda from '/canada.jpg'
import Us from '/australian.jpg'
import Eg from '/england.jpg'
import China from '/china.jpg'
import Ua from '/EU.jpg'
import Jp from '/japan.jpg'


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
         <img src={Usa} />
         <img src={Canda} />
         <img src={Us} />
         <img src={Eg} />
         <img src={China} />
         <img src={Ua} />
         <img src={Jp} />
         <img src={Us} />
         
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
