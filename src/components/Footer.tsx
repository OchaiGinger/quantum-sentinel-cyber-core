import { Shield, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-heading font-bold text-lg">QuantumSentinel</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Built to Withstand. Engineered to Lead.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+234 806 491 4069</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Plot 81, Kuchiako Layout, Kuje, FCT-Abuja</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-md bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-md bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 QuantumSentinel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;