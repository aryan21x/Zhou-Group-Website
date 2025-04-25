import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import 'animate.css';

const Navbar = () => {
  const text = "Shan Zhou Group ";
  const [visibleText, setVisibleText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [resetAnimation, setResetAnimation] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
      }, 150);
    };
    startTypingEffect();
  }, [resetAnimation]);

  const handleHomeClick = () => {
    setResetAnimation((prev) => !prev);
    navigate("/");
    setMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/", onClick: handleHomeClick },
    { name: "Our Team", path: "/our-team" },
    { name: "Research", path: "/research" },
    { name: "Publications", path: "/publications" },
    { name: "News", path: "/news" },
    { name: "Teaching & Outreach", path: "/teaching-outreach" },
    { name: "Photos", path: "/photos" }
  ];

  const isHomePage = location.pathname === "/";
  const isMicroscopePage = location.pathname === "/AFM" || location.pathname === "/FM";

  return (
    <nav className={`navbar ${isHomePage ? "no-background" : ""}${menuOpen ? " navMobile" : ""}`}>
      {/* Logo */}
      <div className="logo" onClick={handleHomeClick}>
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

        {/* Dropdown */}
        <div
          className={`menu-item dropdown ${isMicroscopePage ? "active" : ""}`}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropdown-label">Microscopes ▾</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/AFM" className="dropdown-item">AFM</Link>
              <Link to="/FM" className="dropdown-item">FM</Link>
            </div>
          )}
        </div>
        <Link
          to="/login"
          className={`menu-item ${location.pathname === "/login" ? "active" : ""}`}
        >
          Login
        </Link>
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

          <div className="mobile-dropdown">
            <Link to="/AFM" className={`mobile-subitem ${location.pathname === "/AFM" ? "active" : ""}`}>AFM</Link>
            <Link to="/FM" className={`mobile-subitem ${location.pathname === "/FM" ? "active" : ""}`}>FM</Link>
          </div>
          <Link
          to="/login"
          className={`mobile-menu-item ${location.pathname === "/login" ? "active" : ""}`}
        >
          Login
        </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
