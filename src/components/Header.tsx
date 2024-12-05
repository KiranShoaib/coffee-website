"use client"; 
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaMugHot } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
        <div id="menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? (
          <RxCross2 className="menu-icon" />
        ) : (
          <IoMenu className="menu-icon" />
        )}
        </div>  
        <h1 className="logo">coffee<span className="logo-icon"><FaMugHot/></span></h1>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
            <Link className="nav-links" href={"/"}>Home</Link>
            <Link className="nav-links" href={"/about"}>About</Link>
            <Link className="nav-links" href={"/menu"}>Menu</Link>
            <Link className="nav-links" href={"/reviews"}>Reviews</Link>
            <Link className="nav-links" href={"/book"}>Book</Link>
        </nav>

        <Link className="btn" href="/">book a table</Link>

    </header>
  );
}

export default Header;




