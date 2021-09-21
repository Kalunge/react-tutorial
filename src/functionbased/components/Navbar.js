import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className="navBar">
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {' '}
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              onClick={() => closeNavbar()}
              activeClassName="active-link"
              exact
              to={link.path}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
