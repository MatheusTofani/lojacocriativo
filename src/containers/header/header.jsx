"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import navs from "@/data/nav";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openBrandsMobile, setOpenBrandsMobile] = useState(false);

  return (
    <header className="h-[80px] shadow fixed left-0 md:top-[32px] top-[25px] bg-[#F9F5F3] z-50 w-full px-4 md:px-0">
      <Container className="flex justify-between items-center h-full">
        {/* Logo */}
        <Link href="/">
          <Image src="/logos/logoSimbolo.png" width={50} height={50} alt="Logo" priority />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-[#61482A] font-semibold">
            {navs.map((nav, index) => (
              <li key={index} className={`relative ${nav.options ? "group" : ""}`}>
                {!nav.options ? (
                  <Link
                    href={nav.href}
                    className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#61482A] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {nav.name}
                  </Link>
                ) : (
                  <>
                    {/* Rótulo Marcas (abre dropdown no hover) */}
                    <span
                      tabIndex={0}
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="inline-flex items-center gap-1 cursor-default select-none relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#61482A] after:transition-all after:duration-300 group-hover:after:w-full focus:after:w-full"
                    >
                      {nav.name}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>

                    {/* Dropdown */}
                    <div className="absolute left-0 mt-3 w-64 rounded-xl bg-[#F9F5F3] shadow-lg ring-1 ring-black/5 opacity-0 invisible translate-y-2 transition duration-200 ease-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0">
                      <ul role="menu" className="py-2 max-h-80 overflow-auto">
                        {nav.options.map((opt, idx) => (
                          <li key={idx} role="none">
                            <Link
                              role="menuitem"
                              href={opt.href}
                              className="block px-4 py-2 text-[#61482A] hover:bg-[#f2ece8] transition"
                            >
                              {opt.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão hamburguer mobile */}
        <button
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className={`relative w-10 h-12 flex flex-col justify-center items-center md:hidden ${
            isOpen ? "gap-[5px]" : "gap-[8px]"
          }`}
          onClick={() => setIsOpen((p) => !p)}
        >
          <span className={`h-[2px] w-8 bg-[#61482A] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`h-[2px] w-8 bg-[#61482A] transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-[2px] w-8 bg-[#61482A] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </Container>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden bg-[#F9F5F3] shadow-lg absolute top-[79px] left-0 w-full">
          <ul className="flex flex-col items-center gap-2 py-4 text-[#61482A] font-semibold">
            {navs.map((nav, index) => (
              <li key={index} className="w-full">
                {!nav.options ? (
                  <Link
                    href={nav.href}
                    className="block text-center py-3 relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#61482A] after:transition-all after:duration-300 hover:after:w-1/2"
                    onClick={() => setIsOpen(false)}
                  >
                    {nav.name}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-2 py-3"
                      onClick={() => setOpenBrandsMobile((p) => !p)}
                    >
                      {nav.name}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform ${openBrandsMobile ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {openBrandsMobile && (
                      <ul className="bg-[#F9F5F3">
                        {nav.options.map((opt, idx) => (
                          <li key={idx}>
                            <Link
                              href={opt.href}
                              className="block px-4 py-2 text-center hover:bg-[#f2ece8]"
                              onClick={() => setIsOpen(false)}
                            >
                              {opt.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
