"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./style.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io"; 
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link href="/">
          <img src="/mainlogo.png" alt="Logo" />
        </Link>
      </div>

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <ul className="menu">
          <li className="menu-item">
            <Link href="/products">Our Products</Link>
            <IoMdArrowDropdown size={30} className="dropdown-arrow" />
            <div className="submenu">
              <Link href="/products/option1">Option 1</Link><br/>
              <Link href="/products/option2">Option 2</Link>
            </div>
          </li>
          <li className="menu-item">
            <Link href="/services">Our Services</Link>
            <IoMdArrowDropdown size={30} className="dropdown-arrow" />
            <div className="submenu">
              <Link href="/services/option1">Option 1</Link><br/>
              <Link href="/services/option2">Option 2</Link>
            </div>
          </li>
          <li>
            <Link href="/application">Our Application</Link>
          </li>
          <li>
            <Link href="/turnkey-project">TurnKey Project</Link>
          </li>
        </ul>
      </nav>

      <div className="menu-icons">
        <img src="/icon-menu-phone.svg" />
        <img src="/icon-menu-enquiry.svg" />
      </div>

      <div
        className="menu-bar"
        onMouseEnter={() => setIsNavbarOpen(true)}
        onMouseLeave={() => setIsNavbarOpen(false)}
      >
        {!isNavbarOpen ? (
          <RxHamburgerMenu size={40} className="hamburger" />
        ) : (
          <GrClose size={40} className="close" />
        )}
      </div>

      <div
        className={`mobile-navbar ${isNavbarOpen ? "open" : ""}`}
        onMouseEnter={() => setIsNavbarOpen(true)}
        onMouseLeave={() => setIsNavbarOpen(false)}
      >
        <ul className="mobile-menu">
          <li>
            <Link href="/products">Our Products</Link>
          </li>
          <li>
            <Link href="/services">Our Services</Link>
          </li>
          <li>
            <Link href="/application">Our Application</Link>
          </li>
          <li>
            <Link href="/turnkey-project">TurnKey Project</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
