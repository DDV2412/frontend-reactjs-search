import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed left-0 top-0 right-0 min-h-16 px-4 bg-white z-50">
        <div className="container mx-auto p-4 flex justify-between items-center gap-4">
          <Link to="/">LOGO</Link>
          <ul className="flex justify-end items-center gap-x-6">
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/journals">Journals</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
