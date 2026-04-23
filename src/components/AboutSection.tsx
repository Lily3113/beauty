import { Eye, Target, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-40 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Who We Are</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            About B Gorgeous Beauty Academy
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            At B Gorgeous Beauty Academy, we believe every woman has the power to turn her passion into profit. We are more than a beauty school — we are a movement that empowers women to become confident, skilled, and financially independent.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mt-4">
            Through hands-on training, mentorship, and real-world business knowledge, we equip you with everything you need to succeed in the beauty industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-muted rounded-2xl p-8 text-center flex flex-col h-full">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 shrink-0">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3 shrink-0">Vision</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed flex-grow">
              To build a powerhouse beauty academy that creates fearless, self-made women — turning passion into profit, skills into empires, and everyday women into confident bosses who dominate the beauty industry and uplift their communities.
            </p>
          </div>
          <div className="bg-muted rounded-2xl p-8 text-center flex flex-col h-full">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 shrink-0">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3 shrink-0">Mission</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed flex-grow">
              Our mission is to empower women to take control of their future through beauty, hustle, and entrepreneurship. We don't just teach skills — we build confidence, independence, and boss mentality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
