import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <Link to="/about" className="hover:underline">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/careers" className="hover:underline">Careers</Link>
              </li>
              <li className="mb-2">
                <Link to="/press" className="hover:underline">Press</Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="hover:underline">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <Link to="/customer-service" className="hover:underline">Customer Service</Link>
              </li>
              <li className="mb-2">
                <Link to="/support" className="hover:underline">Support</Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="hover:underline">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
              <li className="mb-2">
                <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/cookies" className="hover:underline">Cookie Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="hover:underline">Terms of Service</Link>
              </li>
              <li className="mb-2">
                <Link to="/security" className="hover:underline">Security</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline"><FontAwesomeIcon icon={faFacebook} /></a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline"><FontAwesomeIcon icon={faTwitter} /></a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline"><FontAwesomeIcon icon={faInstagram} /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline"><FontAwesomeIcon icon={faLinkedin} /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
