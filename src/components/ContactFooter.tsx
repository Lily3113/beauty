import logo from "@/assets/logo.jpg";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const WHATSAPP_1 = "263715642298";
const WHATSAPP_2 = "263715642298";
const WHATSAPP_MSG = encodeURIComponent("Hi B Gorgeous Beauty Academy, I would like to enquire about enrolling.");

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  industry: z.string().min(1, "Please select an industry"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const handleWhatsApp = (number: string) => {
  window.open(`https://wa.me/${number}?text=${WHATSAPP_MSG}`, "_blank", "noopener,noreferrer");
};

const ContactFooter = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      industry: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    // Create personalized WhatsApp message with form data
    const personalizedMessage = encodeURIComponent(
      `Hi B Gorgeous Beauty Academy!\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Interest: ${data.industry}\n` +
      `Message: ${data.message}\n\n` +
      `I would like to enquire about enrolling.`
    );
    window.open(`https://wa.me/${WHATSAPP_1}?text=${personalizedMessage}`, "_blank", "noopener,noreferrer");
  };

  return (
    <footer id="contact" className="bg-muted">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* CTA Card */}
        <div className="bg-white rounded-3xl p-16 md:p-20 mb-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="mb-6">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                  GET STARTED
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Begin Your Beauty Journey
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Transform your passion into a thriving career with our expert-led courses and hands-on training.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call us</p>
                    <p className="text-muted-foreground">+263 715 642 298</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Kwekwe, Zimbabwe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      className="bg-muted border-0 rounded-lg h-12 text-foreground placeholder:text-muted-foreground focus:bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="bg-muted border-0 rounded-lg h-12 text-foreground placeholder:text-muted-foreground focus:bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="industry" className="text-sm font-medium text-foreground mb-2 block">
                      Interest
                    </Label>
                    <Select onValueChange={(value) => form.setValue("industry", value)}>
                      <SelectTrigger className="bg-muted border-0 rounded-lg h-12 text-foreground focus:bg-background focus:ring-2 focus:ring-primary focus:border-transparent">
                        <SelectValue placeholder="Select interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hair-braiding">Hair Braiding</SelectItem>
                        <SelectItem value="nail-art">Nail Art & Design</SelectItem>
                        <SelectItem value="makeup">Makeup Application</SelectItem>
                        <SelectItem value="eyelashes">Eyelash Extensions</SelectItem>
                        <SelectItem value="facials">Facials & Skincare</SelectItem>
                        <SelectItem value="waxing">Waxing</SelectItem>
                        <SelectItem value="massages">Massages</SelectItem>
                        <SelectItem value="microblading">Microblading</SelectItem>
                        <SelectItem value="wig-installation">Wig Installation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.industry && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.industry.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      className="bg-muted border-0 rounded-lg text-foreground placeholder:text-muted-foreground focus:bg-background focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell us your goals..."
                      rows={4}
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-rose-gold-dark text-primary-foreground rounded-full h-10 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <div className="w-4 h-4 bg-primary-foreground rounded-full flex items-center justify-center">
                      <ArrowRight className="w-2.5 h-2.5 text-primary" />
                    </div>
                    Get Started
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-10 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="" aria-hidden="true" className="w-8 h-8 rounded-full object-cover shrink-0" />
              <span className="font-heading text-base font-bold text-foreground uppercase tracking-wider">B Gorgeous</span>
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Learn the Skill. Build the Empire.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Courses", "Testimonials"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-muted-foreground font-body text-sm hover:text-primary transition-colors block leading-none">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}  
          <div className="flex flex-col">
            <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground font-body text-sm leading-none">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:info@bgorgeousbeautyacademy.net" className="hover:text-primary transition-colors">
                  info@bgorgeousbeautyacademy.net
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground font-body text-sm leading-none">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                +263 715 642 298
              </li>
              <li className="flex items-center gap-3 text-muted-foreground font-body text-sm leading-none">
                <MapPin className="w-4 h-4 shrink-0 text-primary" />
                Kwekwe, Zimbabwe
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col">
            <h4 className="font-heading text-sm font-bold text-foreground uppercase tracking-wider mb-6">Follow Us</h4>
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/p/B-Gorgeous-Beauty-Academy-61566899635435/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:info@bgorgeousbeautyacademy.net" className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-border max-w-7xl mx-auto">
          <p className="text-muted-foreground font-body text-xs">
            &copy; {new Date().getFullYear()} B Gorgeous Beauty Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
