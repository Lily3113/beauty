import logo from "@/assets/logo.jpg";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "263715642298";
const WHATSAPP_MSG = encodeURIComponent("Hi B Gorgeous Beauty Academy, I would like to enquire about enrolling.");

const handleEnroll = () => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`, "_blank", "noopener,noreferrer");
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { label: "Home", href: "#home" },
    { label: "Courses", href: "#courses" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.href.substring(1)); // Remove the # from href
      const scrollPosition = window.scrollY + 100; // Add offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="B Gorgeous Beauty Academy" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-heading text-lg font-semibold text-foreground hidden sm:block">
            B Gorgeous Beauty Academy
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === l.href.substring(1)
                  ? "text-primary"
                  : "text-charcoal-light hover:text-primary"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-rose-gold-dark transition-colors"
          >
            Enroll Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-border transition-colors ${
                activeSection === l.href.substring(1)
                  ? "text-primary"
                  : "text-charcoal-light hover:text-primary"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
