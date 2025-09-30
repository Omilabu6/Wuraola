// src/components/Navbar.jsx
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import Magnet from "./stylesComponets/Magnet";

import "../App.css"; 


const navigationItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Works", url: "/#works" },
  { title: "Expertise", url: "/#expertise" },
  { title: "Contact", url: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (url) => {
    if (url.startsWith("#")) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-container ">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="navbar "
      >
        <div className="navbar-inner">
          <div className="navbar-content">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
              W.
            </Link>

             <Magnet padding={50} disabled={false} magnetStrength={3}>
                <button onClick={toggleMenu} className="navbar-menu-btn">
                  <span className="navbar-menu-text">Menu</span>
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMenuOpen ? (
                      <X className="navbar-menu-icon" />
                    ) : (
                      <Menu className="navbar-menu-icon" />
                    )}
                  </motion.div>
                </button>
            </Magnet>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="menu-overlay"
          >
            <div className="menu-overlay-content">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.url.includes("#") ? (
                    <HashLink
                    smooth
                    to={item.url}
                    onClick={() => setIsMenuOpen(false)}
                    className="menu-link"
                  >
                    {item.title}
                  </HashLink>
                  ) : (
                    <Link
                      to={item.url}
                      onClick={() => setIsMenuOpen(false)}
                      className="menu-link"
                    >
                      {item.title}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
