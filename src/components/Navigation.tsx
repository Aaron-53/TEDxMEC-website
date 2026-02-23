import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Speakers", href: "#speakers" },
  { label: "Performances", href: "#performances" },
  { label: "Previous Speakers", href: "#previous-speakers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-20 w-screen">
      <div className="flex w-screen fixed top-0 left-0  z-[200]">
        <nav
          className={` transition-all flex-grow duration-500 m-5 rounded-[14px] bg-tedx-charcoal/90 backdrop-blur-md border-b border-tedx-white/10`}
        >
          <div className="flex items-center justify-between px-10 py-4">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2">
              <img
                src="/tedxmec white.svg"
                alt="TEDxMEC"
                className="h-8 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-mono text-xs uppercase tracking-wider text-tedx-gray hover:text-tedx-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/tickets"
                className="px-4 py-2 bg-tedx-red text-white font-mono text-xs uppercase tracking-wider rounded-md hover:shadow-glow transition-all"
              >
                Get Tickets
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-tedx-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed w-screen inset-0 z-[199] bg-tedx-charcoal/98 backdrop-blur-lg transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sora font-semibold text-2xl text-tedx-white hover:text-tedx-red transition-colors"
              style={{
                transitionDelay: isMobileMenuOpen ? `${idx * 50}ms` : "0ms",
                transform: isMobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/tickets"
            className="mt-4 px-8 py-4 bg-tedx-red text-white font-sora font-semibold uppercase tracking-wider rounded-md"
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${navLinks.length * 50}ms`
                : "0ms",
              transform: isMobileMenuOpen
                ? "translateY(0)"
                : "translateY(20px)",
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            Get Tickets
          </Link>
        </div>
      </div>
    </div>
  );
}
