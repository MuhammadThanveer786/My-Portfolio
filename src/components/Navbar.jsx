import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Lock background scroll when mobile menu is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 5) {
        setIsVisible(false); // Hide on scroll down
      } else if (currentScrollY < lastScrollY - 5) {
        setIsVisible(true);  // Reveal on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-gray-900/40 backdrop-blur-md border-b border-white/10 shadow-sm transition-transform duration-150 ease-out ${
          isVisible || menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-3 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-red-400 transition duration-150"
          >
            Muhammad Thanveer Akula
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="relative text-white/90 text-sm font-medium py-1 transition-colors duration-150 hover:text-red-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-150 hover:after:w-full"
            >
              Home
            </a>
            <a
              href="#about"
              className="relative text-white/90 text-sm font-medium py-1 transition-colors duration-150 hover:text-red-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-150 hover:after:w-full"
            >
              About
            </a>
            <a
              href="#skills"
              className="relative text-white/90 text-sm font-medium py-1 transition-colors duration-150 hover:text-red-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-150 hover:after:w-full"
            >
              Skills
            </a>
            <a
              href="#education"
              className="relative text-white/90 text-sm font-medium py-1 transition-colors duration-150 hover:text-red-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-150 hover:after:w-full"
            >
              Education
            </a>
            <a
              href="#projects"
              className="relative text-white/90 text-sm font-medium py-1 transition-colors duration-150 hover:text-red-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-150 hover:after:w-full"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="relative text-white/90 text-sm font-medium py-1 transition-colors duration-150 hover:text-red-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-150 hover:after:w-full"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-xl p-1 hover:text-red-400 transition"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black h-screen w-screen flex flex-col justify-between p-6 md:hidden">
          <div className="flex items-center justify-between w-full">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-lg sm:text-xl font-bold text-white"
            >
              Muhammad Thanveer Akula
            </a>
            <button
              onClick={closeMenu}
              className="text-2xl text-white hover:text-red-400 transition-colors duration-150"
              aria-label="Close navigation menu"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-7 flex-1">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-2xl font-semibold text-red-400 hover:text-red-300 transition-colors duration-150"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="text-2xl font-semibold text-white hover:text-red-400 transition-colors duration-150"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={closeMenu}
              className="text-2xl font-semibold text-white hover:text-red-400 transition-colors duration-150"
            >
              Skills
            </a>
            <a
              href="#education"
              onClick={closeMenu}
              className="text-2xl font-semibold text-white hover:text-red-400 transition-colors duration-150"
            >
              Education
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="text-2xl font-semibold text-white hover:text-red-400 transition-colors duration-150"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-2xl font-semibold text-white hover:text-red-400 transition-colors duration-150"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;