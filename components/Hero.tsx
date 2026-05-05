import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-accent to-white pt-4 md:pt-6 pb-14 md:pb-14 ">
      <div className=" bg-hero-bg container mx-auto px-4 rounded-[28px] md:rounded-[32px] p-6 md:p-10 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Your Smile,<br />Our Priority
            </h1>

            <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">123 Dental Street, Healthcare City, HC 12345</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-semibold text-gray-800 mb-3">Get in Touch</h3>
                <div className="space-y-2.5">
                  <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>+1 (234) 567-890</span>
                  </a>
                  <a href="mailto:info@dentalclinic.com" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>info@dentalclinic.com</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Working Hours</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
                alt="Modern dental clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
              <p className="text-3xl font-bold text-primary">15+</p>
              <p className="text-gray-600 text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
