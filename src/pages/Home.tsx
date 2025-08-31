import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, Network, Quote } from 'lucide-react';
import heroImage from '@/assets/corporate-hero.jpg';
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'Quantum-safe Encryption',
      description: 'Advanced cryptographic solutions built for the post-quantum era.'
    },
    {
      icon: Eye,
      title: 'AI-based Threat Detection',
      description: 'Machine learning algorithms that identify and respond to emerging threats.'
    },
    {
      icon: Network,
      title: 'IoT Endpoint Protection',
      description: 'Comprehensive security for connected devices and smart infrastructure.'
    },
    {
      icon: Lock,
      title: 'Security Orchestration',
      description: 'Unified analytics and automated response across your entire digital ecosystem.'
    }
  ];

  const testimonials = [
    {
      quote: "QuantumSentinel's AI-driven approach has revolutionized our cybersecurity posture. We've seen a 90% reduction in successful attacks.",
      author: "Sarah Chen",
      role: "CISO, TechFlow Industries"
    },
    {
      quote: "The post-quantum encryption solutions provided by QuantumSentinel give us confidence in our long-term security strategy.",
      author: "Michael Roberts",
      role: "Head of Security, DataVault Corp"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                QuantumSentinel – 
                <span className="text-primary"> Redefining Cyber Defense</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                Next-generation cybersecurity solutions powered by AI and quantum-safe technology, 
                engineered to protect your digital ecosystem at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:shadow-hover transition-all">
                  Explore Solutions
                </Button>
                <Button size="lg" variant="outline" className="hover:bg-primary/5 hover:border-primary transition-all">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-card">
                <img 
                  src={heroImage} 
                  alt="Holographic security shield protecting digital infrastructure" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-lg shadow-card p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              QuantumSentinel delivers next-generation cybersecurity built for the post-quantum era. 
              We combine AI, quantum-safe cryptography, and IoT threat detection to protect digital 
              ecosystems at scale, ensuring your organization stays ahead of evolving cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions designed for modern digital infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Meet Our Leadership
            </h2>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="group hover:shadow-hover transition-all duration-300 bg-card">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">SA</span>
                </div>
                <CardTitle className="text-xl font-heading">Sylvanus Adetu</CardTitle>
                <CardDescription className="text-primary font-medium">Chief Executive Officer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Leading QuantumSentinel's vision for next-generation cybersecurity solutions 
                  with over 15 years of experience in enterprise security.
                </p>
                <Link to="/team">
                  <Button
                    variant="outline"
                    className="hover:bg-primary/5 hover:border-primary transition-all"
                  >
                    Meet the Full Team
                  </Button>
                </Link>
              </CardContent>

            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-card">
                <CardHeader>
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <CardDescription className="text-lg italic text-foreground">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-white">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="hover:bg-primary/5 hover:border-primary transition-all">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
