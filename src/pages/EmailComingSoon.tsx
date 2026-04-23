import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";
import makeupBg from "@/assets/makeup.jfif";

const EmailComingSoon = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${makeupBg})` }}
      />
      <div className="relative z-10 max-w-md w-full text-center">
        <div className="mb-6">
          <img src={logo} alt="B Gorgeous Beauty Academy" className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h1>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Our email contact feature is currently under development. For now, please use our WhatsApp contact to get in touch with us.
        </p>
        <div className="space-y-4">
          <Button asChild className="w-full">
            <a
              href="https://wa.me/263715642298?text=Hi%20B%20Gorgeous%20Beauty%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20enrolling."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact via WhatsApp
            </a>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailComingSoon;