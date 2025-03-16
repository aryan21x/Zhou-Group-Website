import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import 'animate.css';

const Navbar = () => {
  const text = "Shan Zhou Group ";
  const [visibleText, setVisibleText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [resetAnimation, setResetAnimation] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Track current route

  // Typing Effect
  useEffect(() => {
    const startTypingEffect = () => {
      setVisibleText("");
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setVisibleText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };
    startTypingEffect();
  }, [resetAnimation]);


  const handleHomeClick = () => {
    setResetAnimation((prev) => !prev);
    navigate("/");
  };

  const menuItems = [
    { name: "Home", path: "/", onClick: handleHomeClick },
    { name: "Our Team", path: "/our-team" },
    { name: "Research", path: "/research" },
    { name: "Publications", path: "/publications" },
    { name: "News", path: "/news" },
    { name: "Teaching & Outreach", path: "/teaching-outreach" },
    { name: "Photos", path: "/photos" },
    { name: "Login", path: "/login" }
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <div className="logo-text">
          {text.split("").map((char, index) => (
            <span key={index} className={`logo-char ${index < visibleText.length ? "highlight" : ""}`}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="menu">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`menu-item ${location.pathname === item.path ? "active" : ""}`}
            onClick={item.onClick || null}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`mobile-menu-item ${location.pathname === item.path ? "active" : ""}`}
              onClick={item.onClick || null}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
