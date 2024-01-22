import React from 'react';
import { Link } from 'react-router-dom';
import { Link as SmoothScroll} from 'react-scroll';

const Footer = () => {
  return (
    <footer name= "Contact" className="py-8">
      <div className="container mx-auto flex flex-wrap">

        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>
            Have questions or feedback? Reach out to us at <a className="text-blue-300" href="mailto:info@example.com">info@example.com</a>.
          </p>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li><Link className="text-blue-300" href="/">Home</Link></li>
            <li><Link className="text-blue-300" href="/">Features</Link></li>
            <li><Link className="text-blue-300" href="/">How It Works</Link></li>
            <li><SmoothScroll to="About" smooth duration={500} >About Us</SmoothScroll></li>
            <li><SmoothScroll to="Contact" smooth duration={500} >Contact</SmoothScroll></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} I Hear You. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
