// eslint-disable-next-line no-unused-vars
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <table>
        <tr> 
          <td>
            <img className='footerLogo' src="assets/images/logo.png" alt="Logo" height={200} width={200} />
          </td>
          <td>
            <h2>Bakinigahawela Undergraduates Association</h2>
          </td>
          <td></td>
          <td></td>

        
        
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
              <li><a href="mailto:bkundergraduates@gmail.com">bkundergraduates@gmail.com</a></li>
              <li><a href="tel:+94702652676">+94 70 26 526 76</a></li>
            </ul>
          </td>
          </tr>
      
      </table>

      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        <a href="mailto:bkundergraduates@gmail.com"><i className="fas fa-envelope"></i></a>
      </div>

      <hr />

      <p className='copy'>&copy; Design & Developed By <b>Naami Ahmed</b> <br/>
        <b>N27 Tech Solution</b> |<a href ="mailto:n27techsolutions@gmail.com">n27techsolutions@gmail.com</a>
      </p>
    </footer>
  );
}

export default Footer;