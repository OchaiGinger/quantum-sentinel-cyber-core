import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye, Network, Zap, Users, Target, Award } from 'lucide-react';
import platformImage from '@/assets/platform-diagram.jpg';

const About = () => {
  const services = [
    {
      icon: Shield,
      title: 'Quantum-Safe Encryption',
      description: 'Future-proof cryptographic protocols designed to withstand quantum computing threats and ensure long-term data protection.'
    },
    {
      icon: Eye,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that continuously monitor, analyze, and respond to sophisticated cyber threats in real-time.'
    },
    {
      icon: Network,
      title: 'IoT Protection',
      description: 'Comprehensive security framework for connected devices, smart infrastructure, and distributed IoT ecosystems.'
    },
    {
      icon: Lock,
      title: 'Security Orchestration',
      description: 'Unified platform for automated incident response, threat intelligence, and centralized security management.'
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'Adaptive Firewalls',
      description: 'Dynamic protection that evolves with your network topology and threat landscape.'
    },
    {
      icon: Users,
      title: 'Zero-Trust Integration',
      description: 'Seamless implementation of zero-trust architecture across your entire digital infrastructure.'
    },
    {
      icon: Target,
      title: 'Continuous Threat Simulation',
      description: 'Proactive security testing through automated penetration testing and vulnerability assessment.'
    },
    {
      icon: Award,
      title: 'Post-Quantum Compliance',
      description: 'Full compliance with emerging post-quantum cryptographic standards and regulations.'
    }
  ];

  return (
    <div>
      {/* Intro Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
            AI Meets <span className="text-primary">Post-Quantum Protection</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            QuantumSentinel combines cutting-edge artificial intelligence with quantum-resistant 
            cryptography to deliver cybersecurity solutions that are both powerful today and 
            resilient for tomorrow's challenges.
          </p>
        </div>
      </section>

      {/* Expanded Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions built for the modern enterprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-card border-border h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-heading mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Secure from <span className="text-primary">Edge to Core</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our integrated platform provides end-to-end protection across your entire digital ecosystem. 
                From edge devices to core infrastructure, QuantumSentinel ensures comprehensive security 
                coverage with seamless integration and centralized management.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Real-time threat detection and response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Quantum-resistant encryption protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Unified security orchestration</span>
                </div>
              </div>
              <Button className="bg-gradient-primary hover:shadow-hover transition-all">
                Learn More About Our Platform
              </Button>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-card">
                <img 
                  src={platformImage} 
                  alt="QuantumSentinel platform architecture diagram" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why QuantumSentinel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose QuantumSentinel?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced capabilities that set us apart in the cybersecurity landscape
            </p>
          </div>
          
          <div className="space-y-6">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-6">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                          {advantage.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;