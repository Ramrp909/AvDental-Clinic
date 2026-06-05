import { Smile, Sparkles, Shield, Scissors } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      icon: <Smile className="w-6 h-6" />,
      title: 'General Dentistry',
      description: 'Comprehensive dental care including checkups, cleanings, and preventive treatments for the whole family.',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with teeth whitening, veneers, and other aesthetic dental procedures.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Orthodontics',
      description: 'Straighten your teeth with traditional braces or clear aligners for a perfect smile.',
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including extractions, implants, and wisdom teeth removal.',
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: 'Pediatric Dentistry',
      description: 'Gentle and caring dental treatment specifically designed for children and teens.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Emergency Care',
      description: 'Urgent dental care when you need it most, available during business hours.',
    },
  ];

  return (
    <section id="services" className="py-6 md:py-14 bg-hero-bg rounded-[28px] md:rounded-[32px] p-6 md:p-08 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-l font-bold text-gray-800 mb-2 md:mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We provide comprehensive dental care services using advanced technology and techniques.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
