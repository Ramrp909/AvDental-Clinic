import { Shield, Award, Clock, Heart } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Expert Care',
      description: 'Board-certified dentists with years of experience',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment for precise treatment',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Hours',
      description: 'Evening and weekend appointments available',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Patient-Focused',
      description: 'Comfortable environment with personalized care',
    },
  ];

  return (
    <section className="py-6 md:py-08 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We are committed to providing the highest quality dental care with a focus on your comfort and satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-3 sm:p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 text-primary text-sm sm:text-base">
                {feature.icon}
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-tight">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
