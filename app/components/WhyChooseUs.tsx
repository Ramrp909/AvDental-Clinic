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
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the highest quality dental care with a focus on your comfort and satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
