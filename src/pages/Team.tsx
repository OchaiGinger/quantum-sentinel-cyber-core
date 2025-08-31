import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Quote, Linkedin, Mail } from 'lucide-react';
import ceoImage from '@/assets/ceo-portrait.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: "Sylvanus Adetu",
      role: "Chief Executive Officer",
      image: ceoImage,
      bio: "Leading QuantumSentinel's vision for next-generation cybersecurity with over 15 years of experience in enterprise security and quantum computing research.",
      initials: "SA"
    },
    {
      name: "Ngozi Nwankwo",
      role: "Chief Security Architect",
      bio: "Expert in designing quantum-safe cryptographic systems with extensive background in advanced threat detection and AI security implementations.",
      initials: "NN"
    },
    {
      name: "Kabiru Danjuma",
      role: "Head of Quantum Systems Engineering",
      bio: "Pioneering quantum-resistant technologies and leading the development of post-quantum cryptographic solutions for enterprise environments.",
      initials: "KD"
    },
    {
      name: "Femi Alade",
      role: "Director of Strategic Threat Intelligence",
      bio: "Specializing in advanced persistent threat analysis and coordinating intelligence-driven cybersecurity strategies for critical infrastructure.",
      initials: "FA"
    }
  ];

  const testimonials = [
    {
      quote: "QuantumSentinel's quantum-safe encryption has future-proofed our entire digital infrastructure. Their team's expertise is unmatched.",
      author: "Dr. Sarah Chen",
      role: "CISO, TechFlow Industries",
      company: "Fortune 500 Technology Company"
    },
    {
      quote: "The AI-driven threat detection capabilities have transformed our security operations. We've seen a 90% reduction in successful attacks.",
      author: "Michael Roberts",
      role: "Head of Security",
      company: "DataVault Corp"
    },
    {
      quote: "Their post-quantum compliance framework helped us stay ahead of regulatory requirements. Outstanding technical leadership.",
      author: "Jennifer Martinez",
      role: "VP of Risk Management",
      company: "Global Financial Services"
    },
    {
      quote: "QuantumSentinel's IoT protection suite secured our smart city infrastructure seamlessly. Highly recommend their expertise.",
      author: "David Thompson",
      role: "Chief Technology Officer",
      company: "Smart Cities Initiative"
    },
    {
      quote: "The security orchestration platform has streamlined our incident response by 70%. Game-changing technology and support.",
      author: "Lisa Wang",
      role: "Security Operations Manager",
      company: "Healthcare Systems Network"
    },
    {
      quote: "Their quantum-resistant solutions give us confidence in our long-term security strategy. Exceptional team and technology.",
      author: "Ahmed Hassan",
      role: "Information Security Director",
      company: "Government Defense Contractor"
    }
  ];

  return (
    <div>
      {/* Team Header */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Expert Team</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Cybersecurity pioneers with deep expertise in quantum-safe technologies, 
            AI-driven threat detection, and enterprise security architecture.
          </p>
        </div>
      </section>

      {/* Team Grid */}
     {/* Team Grid */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {teamMembers.map((member, index) => {
        // Grab first name in lowercase (e.g. "sylvanus")
        const firstName = member.name.split(" ")[0].toLowerCase();

        return (
          <Card
            key={index}
            className="group hover:shadow-hover transition-all duration-300 bg-card border-border"
          >
            <CardHeader className="text-center">
              <div className="relative mx-auto mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-card">
                  <img
                    src={`/${firstName}.png`}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <CardTitle className="text-xl font-heading">{member.name}</CardTitle>
              <CardDescription className="text-primary font-medium text-lg">
                {member.role}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
              <div className="flex justify-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/5 hover:border-primary transition-all"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary/5 hover:border-primary transition-all"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
</section>

 {/* Full Testimonials */}
<section className="py-20 bg-secondary">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
        Client Testimonials
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Hear from organizations who trust QuantumSentinel to protect their digital assets
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => {
        // Extract first name in lowercase for image filename
        const firstName = testimonial.author.split(" ")[0].toLowerCase();

        return (
          <Card
            key={index}
            className="group hover:shadow-hover transition-all duration-300 bg-card border-border h-full"
          >
            <CardHeader>
              <Quote className="h-6 w-6 text-primary mb-4" />
              <CardDescription className="text-foreground italic leading-relaxed">
                "{testimonial.quote}"
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden shadow-card flex-shrink-0">
                    <img
                      src={`/${firstName}.png`}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground pl-12">
                  {testimonial.company}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
</section>


      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              QuantumSentinel — Built to Withstand. Engineered to Lead.
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to transform your cybersecurity posture with quantum-safe solutions?
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-hover transition-all text-lg px-8 py-4"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
