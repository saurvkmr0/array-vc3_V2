import React, { useState } from 'react';
import Logo from './Logo';
import MenuToggle from './MenuToggle';
import NavLinks from './NavLinks';
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkArr = ["HOME", "ABOUT", "PORTFOLIO","TEAM", "RESOURCES", "CONTACT"];


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent dark:text-white text-customBlack mx-4 lg:mx-40 py-4 md:py-8">
      <div className="space-x-8">
        <div className="w-full flex items-center justify-between">
          <Logo />

          <NavLinks isMenuOpen={isMenuOpen} navLinkArr={navLinkArr} />

          <div className="flex gap-4">
            <ThemeToggler/>
            <div className="lg:hidden flex items-center space-x-2 z-50">
              <MenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
          </div>

          <div className={`${isMenuOpen === false ? 'hidden' : 'block'} absolute top-0 left-0 z-10 bg-white dark:bg-black dark:text-white w-screen h-screen flex flex-col justify-between py-20`}>
          {navLinkArr.map((link, index) => (
              <li key={index} className="md:my-0 my-2 text-center relative group list-none">
                <a
                  href={`#${link.toLowerCase()}`}
                  className="relative z-10 inline-block hover:text-highlight font-bold text-5xl"
                >
                  {link}
                </a>
              </li>
            ))}
          </div>

          {/* <ThemeToggler/> */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
