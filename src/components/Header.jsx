import React from "react";
import logo from "../assets/logo-MARN-white.png";

function Header() {
  return (
    <header className="bg-main-blue h-16 flex items-center justify-between px-5">
      <img width={150} src={logo} alt="logo MARN" />
      <p className="text-white sm:text-2xl text-lg text-center">Sistema de información meteorológica</p>
      <img width={150} src={logo} alt="logo MARN" className="sm:opacity-0 sm:block hidden"/>
    </header>
  );
}

export default Header;