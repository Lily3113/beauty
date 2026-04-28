import { useState } from "react";
import nailsImg from "@/assets/nails.jfif";
import massagesImg from "@/assets/massages.jfif";
import pedicureImg from "@/assets/pedicure-manicure.jfif";
import eyelashesImg from "@/assets/eyelashes.jfif";
import braidsImg from "@/assets/braids.jfif";
import facialsImg from "@/assets/facials.jfif";
import waxingImg from "@/assets/waxing.jfif";
import makeupImg from "@/assets/makeup.jfif";
import tintImg from "@/assets/tint.jfif";
import microbladingImg from "@/assets/microblading.jfif";
import wigImg from "@/assets/wig-installation.jfif";

const WHATSAPP_NUMBER = "263715624731";
const WHATSAPP_MSG = encodeURIComponent("Hi B Gorgeous Beauty Academy, I would like to enquire about enrolling.");

interface Course {
  title: string;
  price: string;
  description: string;
  image: string;
}

const courses: Course[] = [
  { title: "Nails", price: "$90", description: "Learn professional nail techniques including shaping, polishing, and nail art. Turn your creativity into a profitable service clients will love.", image: nailsImg },
  { title: "Massages", price: "$100", description: "Master relaxing and therapeutic massage techniques that keep clients coming back — and willing to pay premium prices.", image: massagesImg },
  { title: "Pedicure & Manicure", price: "$90", description: "Offer complete hand and foot care services that every client needs regularly — perfect for building consistent income.", image: pedicureImg },
  { title: "Individual Eyelashes", price: "$70", description: "Learn how to apply flawless lash extensions that enhance beauty and boost confidence instantly.", image: eyelashesImg },
  { title: "Braiding", price: "$90", description: "Turn hair into art. Learn trendy and traditional braiding styles that are always in demand.", image: braidsImg },
  { title: "Facials", price: "$100", description: "Understand skincare and provide glowing results that keep clients loyal to your services.", image: facialsImg },
  { title: "Waxing", price: "$70", description: "Offer clean, professional hair removal services that clients trust and return for.", image: waxingImg },
  { title: "Makeup", price: "$90", description: "Learn professional makeup application for events, everyday glam, and bridal looks.", image: makeupImg },
  { title: "Eyebrow Tint", price: "$80", description: "Enhance natural beauty with perfectly shaped and tinted brows.", image: tintImg },
  { title: "Microblading", price: "$100", description: "Master a high-income skill that transforms eyebrows and boosts your earning potential.", image: microbladingImg },
  { title: "Wig Installation", price: "$100", description: "Learn flawless wig installation techniques and become the go-to stylist in your area.", image: wigImg },
];

const INITIAL_COUNT = 4;

const CoursesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? courses : courses.slice(0, INITIAL_COUNT);

  const handleEnroll = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="courses" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Build Your Empire</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Courses</h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Each course is an opportunity — not just training. Invest in yourself today.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {visible.map((course) => (
            <div key={course.title} className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group flex flex-col h-full">
              <div className="aspect-[4/3] overflow-hidden shrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-2 shrink-0">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{course.title}</h3>
                  <span className="text-primary font-body font-bold text-lg">{course.price}</span>
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed flex-grow">{course.description}</p>
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
              Read More Courses
            </button>
          </div>
        )}

        <div className="text-center mt-10">
          <p className="text-muted-foreground font-body text-sm mb-6">
            Registration Fee: $15 &nbsp;|&nbsp; Branded T-shirt: $10
          </p>
          <a
            href="#contact"
            className="inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-rose-gold-dark transition-colors"
          >
            Start Your Beauty Career Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
