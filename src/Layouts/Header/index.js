import React from 'react';
import './index.css';
import Link from '../../components/Link/Link';

const Header = () => (
  <div className="Header">
    <Link to="/" className="Header__menuItem">Home</Link>
    <Link to="/settings" className="Header__menuItem">Setting</Link>
  </div>
);

export default Header;