import logo from "@/assets/logo.jpg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "263715624731";
const WHATSAPP_MSG = encodeURIComponent("Hi B Gorgeous Beauty Academy, I would like to enquire about enrolling.");

const handleEnroll = () => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`, "_blank", "noopener,noreferrer");
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Courses", href: "#courses" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="B Gorgeous Beauty Academy" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-heading text-lg font-semibold text-foreground hidden sm:block">
            B Gorgeous
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-charcoal-light hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleEnroll}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-rose-gold-dark transition-colors"
          >
            Enroll Now
          </button>
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
              className="block py-3 text-sm font-medium text-charcoal-light hover:text-primary border-b border-border"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={handleEnroll}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
