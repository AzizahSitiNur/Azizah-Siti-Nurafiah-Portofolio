import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar flex items-center justify-between py-7 px-auto md:px-auto">
      <div className="logo">
        <h1 className="text-3xl font-bold">Portfolio</h1>
      </div>

      <ul
        className={`hidden md:flex items-center gap-10 fixed md:static left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 transition-all duration-300 z-50
          ${
            active
              ? "top-5 md:top-0 opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-2xl border border-white/20 md:bg-transparent md:p-0 md:border-0"
              : "-top-20 md:top-0 md:opacity-100"
          }`}
      >
        <li>
          <a href="#beranda" className="text-lg font-medium hover:text-gray-700">
            Beranda
          </a>
        </li>
        <li>
          <a href="#tentang" className="text-lg font-medium hover:text-gray-700">
            Tentang
          </a>
        </li>
        <li>
          <a href="#proyek" className="text-lg font-medium hover:text-gray-700">
            Proyek
          </a>
        </li>
        <li>
          <a href="#kontak" className="text-lg font-medium hover:text-gray-700">
            Kontak
          </a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <button
        className="md:hidden flex flex-col gap-1.5 focus:outline-none ml-auto"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-6 bg-black transition-transform duration-300 ${
            isOpen ? "translate-y-1.5 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-black transition-transform duration-300 ${
            isOpen ? "-translate-y-1.5 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Menu mobile – turun ke bawah */}
      <ul
        className={`md:hidden fixed right-4 top-20 flex-col items-start gap-4 rounded-2xl bg-white shadow-lg p-4
          transition-all duration-300 origin-top
          ${isOpen ? "flex scale-100 opacity-100" : "hidden scale-95 opacity-0"}`}
      >
        <li>
          <a
            href="#beranda"
            className="text-lg font-medium hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-lg font-medium hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            className="text-lg font-medium hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Proyek
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            className="text-lg font-medium hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;