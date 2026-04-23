import { useState } from "react";
import nailsImg from "@/assets/Nail Art & Design.jfif";
import braidsImg from "@/assets/Hair Braiding.jfif";
import wigImg from "@/assets/Wig Installation.jfif";
import makeupImg from "@/assets/Makeup Application.jfif";
import eyelashesImg from "@/assets/Eyelash Extensions.jfif";
import microbladingImg from "@/assets/microblading.jfif";

const WHATSAPP_NUMBER = "263715642298";
const WHATSAPP_MSG = encodeURIComponent("Hi B Gorgeous Beauty Services, I'd like to book an appointment..");

interface Service {
  title: string;
  price: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Nail Art & Design",
    price: "$15 – $30",
    description:
      "Premium manicure, pedicure, gel, acrylics, and custom nail art designs crafted to match your unique style.",
    image: nailsImg
  },
  {
    title: "Hair Braiding",
    price: "$20 – $30",
    description:
      "Professional braiding services including cornrows, knotless braids, and protective styles tailored for all hair types.",
    image: braidsImg
  },
  {
    title: "Wig Installation",
    price: "$30 – $70",
    description:
      "Seamless wig installation and styling for a flawless, natural look that lasts longer and protects your hair.",
    image: wigImg
  },
  {
    title: "Makeup Application",
    price: "$30 – $100",
    description:
      "Soft glam to full glam makeup for events, photoshoots, or everyday beauty — enhancing your natural glow.",
    image: makeupImg
  },
  {
    title: "Eyelash Extensions",
    price: "$20 – $60",
    description:
      "Lightweight lash extensions that add volume and length, giving you bold, long-lasting results.",
    image: eyelashesImg
  },
  {
    title: "Eyebrow Microblading",
    price: "$80 – $200",
    description:
      "Semi-permanent brow enhancement designed to give you natural, fuller, and perfectly shaped eyebrows.",
    image: microbladingImg
  },
];

const INITIAL_COUNT = 4;

const SalonServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? services : services.slice(0, INITIAL_COUNT);

  const handleBookService = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Professional Salon Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">B Gorgeous Beauty Services</h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Transform your look with our expert hair and nail services. Quality, style, and care in every treatment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {visible.map((service) => (
            <div key={service.title} className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2 shrink-0">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{service.title}</h3>
                  <span className="text-primary font-body font-bold text-lg">{service.price}</span>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="text-primary font-body font-semibold text-sm hover:underline transition-colors"
            >
              View More Services
            </button>
          </div>
        )}

        <div className="text-center mt-10">
          <button
            onClick={handleBookService}
            className="inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-rose-gold-dark transition-colors"
          >
            Book Your Service Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default SalonServicesSection;