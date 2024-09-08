// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">

      <table>
        <tr> 
          <td>
            <img className='footerLogo' src="../assets/BKUA_Logo.jpg" alt="Logo"  />
          </td>
            <td>
              <h3>Bakinigahawela Undergraduates Association</h3>
            </td>
        </tr>

        </table>
      
     <table>
        <tr>
          <td>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#events">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Events</a></li>
              <li><a href="#footer">Contact Us</a></li>
            </ul>
          </td>
          <td>
            <h4>Contact Us</h4>
            <ul>
              <li><a href="mailto:***@gmail.com">bkundergraduates@gmail.com</a></li>
              <li><a href="tel:+94702652676">+94 70 26 526 76</a></li>
            </ul>
          </td>
        </tr>
      </table>

      <hr />

      <p className='copy'>&copy; Design & Developed By <b>Naami Ahmed</b> <br/>
                <b>N27 Tech Solution</b> | +94 70 26 526 76  </p>
    </footer>
  );
}

export default Footer;
