"use client";
import { useState } from "react";
import Container from "@/components/container";
import navs from "@/data/nav";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-[80px] shadow fixed left-0 md:top-[32px] top-[25px]  bg-[#F9F5F3] z-50 w-full  px-4 md:px-0">
      <Container className="flex justify-between items-center h-full">
        {/* Logo */}
        <Image
          src={"/logos/logoSimbolo.png"}
          width={50}
          height={50}
          alt="Logo"
        />

        {/* Menu desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-[#61482A] font-semibold">
            {navs.map((nav, index) => (
              <li key={index}>
                <a
                  href={nav.href}
                  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#61482A] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

    {/* Botão hamburguer mobile */}
<button
className={`relative w-10 h-12 flex flex-col justify-center items-center md:hidden ${
    isOpen ? "gap-[5px]" : "gap-[8px]"}`}
  onClick={() => setIsOpen(!isOpen)}
>
  <span
    className={`h-[2px] w-8 bg-[#61482A] transition-all duration-300 ${
      isOpen ? "rotate-45 translate-y-[7px]" : ""
    }`}
  />
  <span
    className={`h-[2px] w-8 bg-[#61482A] transition-all duration-300 ${
      isOpen ? "opacity-0" : "opacity-100"
    }`}
  />
  <span
    className={`h-[2px] w-8 bg-[#61482A] transition-all duration-300 ${
      isOpen ? "-rotate-45 -translate-y-[7px]" : ""
    }`}
  />
</button>



      </Container>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-[#F9F5F3] shadow-lg absolute top-[79px] left-0 w-full">
          <ul className="flex flex-col items-center gap-6 py-6 text-[#61482A] font-semibold">
            {navs.map((nav, index) => (
              <li key={index}>
                <a
                  href={nav.href}
                  className="block relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#61482A] after:transition-all after:duration-300 hover:after:w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
