import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, CreditCard, Zap, Heart, Phone, MapPin } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Building,
      title: 'Government & Defense',
      description: 'Protecting critical infrastructure and sensitive government data with military-grade security protocols and compliance frameworks.',
      features: ['FISMA Compliance', 'Zero-Trust Architecture', 'Quantum-Safe Communications']
    },
    {
      icon: CreditCard,
      title: 'FinTech & Insurance',
      description: 'Securing financial transactions and protecting customer data with advanced fraud detection and regulatory compliance.',
      features: ['PCI DSS Compliance', 'Real-time Fraud Detection', 'Secure Payment Processing']
    },
    {
      icon: Zap,
      title: 'Smart Cities & Energy',
      description: 'Protecting smart grid infrastructure and IoT networks that power modern cities and energy distribution systems.',
      features: ['IoT Device Security', 'Grid Protection', 'Smart Infrastructure Monitoring']
    },
    {
      icon: Heart,
      title: 'Healthcare & Bioinformatics',
      description: 'Safeguarding patient data and medical research with HIPAA-compliant solutions and specialized healthcare security.',
      features: ['HIPAA Compliance', 'Medical Data Protection', 'Research Security']
    }
  ];

  return (
    <div>
      {/* Industries Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
              Industries <span className="text-primary">We Serve</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored cybersecurity solutions designed for the unique challenges and 
              compliance requirements of your industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-card border-border h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-heading mb-2">{industry.title}</CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {industry.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Key Features:</h4>
                      <ul className="space-y-1">
                        {industry.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Secure the Future with <span className="text-primary">QuantumSentinel</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to transform your cybersecurity posture? Our experts are standing by to help you 
                assess your current security infrastructure and design a comprehensive protection strategy 
                tailored to your specific needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Free security assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Customized solution design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Expert implementation support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">24/7 monitoring and support</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-card border-border shadow-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-heading text-foreground">
                    Ready to Get Started?
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Contact our cybersecurity experts today for a personalized consultation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-hover transition-all text-lg py-6"
                  >
                    Schedule Free Consultation
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Or call us directly for immediate assistance
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Strip */}
      <section className="py-12 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-hover transition-all duration-300 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Call Us</h3>
                    <p className="text-lg font-medium text-primary">+234 806 491 4069</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-hover transition-all duration-300 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">Plot 81, Kuchiako Layout<br />Kuje, FCT-Abuja</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;