import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_NUMBER = "263715624731";
const WHATSAPP_MSG = encodeURIComponent("Hi B Gorgeous Beauty Academy, I would like to enquire about enrolling.");

const handleEnroll = () => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`, "_blank", "noopener,noreferrer");
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Beauty professional" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-rose-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Learn the Skill. Build the Empire.
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Become Your Own Boss<br />in the Beauty Industry
        </h1>
        <p className="max-w-2xl mx-auto text-background/80 font-body text-base md:text-lg mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Master high-income beauty skills, gain real confidence, and start building your own empire today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <button
            onClick={handleEnroll}
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-rose-gold-dark transition-colors"
          >
            Enroll Now
          </button>
          <a
            href="#courses"
            className="rounded-full border-2 border-background/40 px-8 py-3.5 text-sm font-semibold text-background hover:bg-background/10 transition-colors"
          >
            View Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
