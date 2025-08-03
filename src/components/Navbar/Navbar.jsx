import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    //Transparent 
   <nav className="bg-transparent text-white fixed top-0 left-0 w-full z-50 py-4">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
    <Link
      to="/"
      className="text-2xl  font-light tracking-widest hover:text-yellow-400 transition"
    >
      Restaura
    </Link>

    {/* Desktop */}
    <div className="hidden md:flex gap-8 items-center text-sm uppercase">
      <Link to="/dishes" className="hover:text-yellow-400 transition">Dishes</Link>
      <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
      <Link to="/mission" className="hover:text-yellow-400 transition">Mission</Link>
      <Link to="/expertise" className="hover:text-yellow-400 transition">Expertise</Link>
      <Link to="/review" className="hover:text-yellow-400 transition">Review</Link>
      <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
    </div>

    {/* Hamburger */}
    <button
      onClick={toggleMenu}
      className="md:hidden focus:outline-none text-white"
    >
      {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  </div>

  {/* Mobil */}
  {isOpen && (
    <div className="md:hidden bg-black/95 backdrop-blur-md p-6 absolute top-full left-0 w-full flex flex-col gap-6 text-sm uppercase shadow">
      <Link to="/dishes" className="hover:text-yellow-400 transition" onClick={toggleMenu}>Dishes</Link>
      <Link to="/about" className="hover:text-yellow-400 transition" onClick={toggleMenu}>About</Link>
      <Link to="/mission" className="hover:text-yellow-400 transition" onClick={toggleMenu}>Mission</Link>
      <Link to="/expertise" className="hover:text-yellow-400 transition" onClick={toggleMenu}>Expertise</Link>
      <Link to="/review" className="hover:text-yellow-400 transition" onClick={toggleMenu}>Review</Link>
      <Link to="/contact" className="hover:text-yellow-400 transition" onClick={toggleMenu}>Contact</Link>
    </div>
  )}
</nav>
  );
}

export default Navbar;
