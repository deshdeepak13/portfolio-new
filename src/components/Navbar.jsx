import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {

  function toggleTheme(){
    // console.log("ddhd");
    document.documentElement.classList.toggle("dark");

  }


  return (
    <>
      <div className="navbar flex justify-between px-20  bg-gray-200 dark:bg-gray-950 py-5 items-center">
        <div className="logo font-bold text-3xl text-green-600">{"<ddDev/>"}</div>
        <div className="navmenu">
          <ul className="list-none flex gap-6 text-lg items-center dark:text-white">
            
            <li className="hover:scale-105 hover:underline decoration-1 decoration-green-600 hover:underline-offset-4">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            
            <li className="hover:scale-105 hover:underline decoration-1 decoration-green-600 hover:underline-offset-4">
              <AnchorLink href="#work">Work</AnchorLink>
            </li>
            <li className="hover:scale-105 hover:underline decoration-1 decoration-green-600 hover:underline-offset-4">
              <AnchorLink href="#experience">Experience</AnchorLink>
            </li>
            <li className="hover:scale-105 hover:underline decoration-1 decoration-green-600 hover:underline-offset-4">
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
            <li>
              <button className="email py-1 px-4 border-green-600 border hover:scale-105">Email</button>
            </li>
            <li>
              <button className="resume bg-green-600 px-2 py-1 text-white dark:text-black hover:scale-105 hover:opacity-80 ">Resume</button>
              
            </li>
            <li><button  onClick={toggleTheme} className="bg-white text-black dark:bg-black dark:text-white">Dark</button></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
