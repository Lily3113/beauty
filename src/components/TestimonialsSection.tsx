import { Star } from "lucide-react";

const testimonials = [
  { text: "This academy changed my life. I now run my own beauty business!", name: "Tendai M." },
  { text: "The training is practical and empowering. I gained confidence and income.", name: "Rudo K." },
  { text: "Best decision I ever made — now I'm fully booked with clients!", name: "Nyasha P." },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Success Stories</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What Our Students Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-muted rounded-2xl p-8 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground font-body italic leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-primary font-body font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
