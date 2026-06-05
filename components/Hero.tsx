import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-accent to-white pt-2 md:pt-6 pb-8 md:pb-14 ">
      <div className=" bg-hero-bg container mx-auto px-4 rounded-[28px] md:rounded-[32px] p-4 md:p-10 shadow-xl">
        <div className="grid md:grid-cols-2 gap-4 md:gap-12 items-center">
          <div className="space-y-3 md:space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Your Smile,<br />Our Priority
            </h1>

            <div className="space-y-3 md:space-y-4 bg-white p-4 md:p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 md:mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800 text-sm md:text-base">Location</p>
                  <p className="text-gray-600 text-xs md:text-sm">Near Tower Clock Centre,above tirumula Dairy Parlour,<br/> Gudur, Nellore - 524101</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-2.5 md:pt-4">
                <h3 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm">Get in Touch</h3>
                <div className="space-y-1.5 md:space-y-2.5">
                  <a href="tel:+1234567890" className="flex items-center gap-2 md:gap-3 text-gray-700 hover:text-primary transition-colors text-xs md:text-sm">
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>+1 (234) 567-890</span>
                  </a>
                  <a href="mailto:info@dentalclinic.com" className="flex items-center gap-2 md:gap-3 text-gray-700 hover:text-primary transition-colors text-xs md:text-sm">
                    <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>info@dentalclinic.com</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-2.5 md:pt-4">
                <div className="flex items-start gap-2 md:gap-3">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 md:mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800 mb-1 md:mb-2 text-sm">Working Hours</p>
                    <div className="space-y-0.5 text-xs md:text-sm text-gray-600">
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
            <div className="aspect-[4/3] rounded-2xl overflow-visible shadow-2xl">
              <Image
              width={200}
              height={200}
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
                alt="Modern dental clinic interior"
                className="w-full h-full object-cover"
              />
              
              {/* Badge Overlays */}
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-white p-3 md:p-5 rounded-xl shadow-lg">
                <p className="text-2xl md:text-3xl font-bold text-primary">15+</p>
                <p className="text-gray-600 text-xs md:text-sm">Years of Experience</p>
              </div>
              
              <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-white p-3 md:p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FFE4D6] flex items-center justify-center flex-shrink-0">
                    <p className="w-5 h-5 md:w-6 md:h-6 text-[#0066CC]" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-xs md:text-sm">Same Day</div>
                    <div className="text-xs text-muted-foreground">Appointments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
