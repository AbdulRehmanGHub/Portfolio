
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="text-5xl font-signature ml-2">Dev. Abdul Rehman</h1>
            </div>
            <ul className="hidden md:flex">
                <NavItem to="home" text="Home" />
                <NavItem to="about" text="About" />
                <NavItem to="portfolio" text="Portfolio" />
                <NavItem to="experience" text="Experience" />
                <NavItem to="contact" text="Contact" />
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-9 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    <NavItem to="home" text="Home" closeNav={() => setNav(false)} />
                    <NavItem to="about" text="About" closeNav={() => setNav(false)} />
                    <NavItem to="portfolio" text="Portfolio" closeNav={() => setNav(false)} />
                    <NavItem to="experience" text="Experience" closeNav={() => setNav(false)} />
                    <NavItem to="contact" text="Contact" closeNav={() => setNav(false)} />
                </ul>
            )}
        </div>
    );
};

const NavItem = ({ to, text, closeNav }) => (
    <li
        onClick={closeNav}
        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
        <Link
            activeClass="active"
            to={to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            {text}
        </Link>
    </li>
);

export default NavBar;
