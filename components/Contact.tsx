import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-6 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We are located in a convenient area with ample parking. Come visit us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 rounded-xl overflow-hidden h-[250px] sm:h-[300px] md:h-[400px] relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-light to-accent">
              <div className="text-center px-4">
                <MapPin className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-2 md:mb-4" />
                <p className="text-gray-700 font-medium text-sm md:text-base">Map Integration Placeholder</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.810383120363!2d79.84506207456516!3d14.147242688016451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4ce3000690111b%3A0xa9bc4bc6593d5c4a!2sAvinash%20dental%20care!5e0!3m2!1sen!2sin!4v1780748105139!5m2!1sen!2sin" width="600" height="450" style={{border:0,}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="mt-4 text-center">
  <a
    href="https://maps.google.com/?q=Avinash+Dental+Care+Gudur"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
  >
    <MapPin className="w-4 h-4" />
    Get Directions
  </a>
</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4 md:space-y-0">
            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-xl">
              <div className="flex flex-col items-start gap-2 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-0.5 md:mb-1 text-sm md:text-base">Address</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-tight md:leading-normal">
                    Near TowerClock Centre<br />
                    Gudur Town - Nellore District<br />
                    Andhra Pradesh - 524101
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-xl">
              <div className="flex flex-col items-start gap-2 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-0.5 md:mb-1 text-sm md:text-base">Phone</h3>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-primary transition-colors text-xs md:text-sm">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-xl">
              <div className="flex flex-col items-start gap-2 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-0.5 md:mb-1 text-sm md:text-base">Email</h3>
                  <a href="mailto:info@dentalclinic.com" className="text-gray-600 hover:text-primary transition-colors text-xs md:text-sm">
                    info@dentalclinic.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 sm:p-4 md:p-6 rounded-xl">
              <div className="flex flex-col items-start gap-2 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-0.5 md:mb-1 text-sm md:text-base">Working Hours</h3>
                  <div className="space-y-0.5 text-xs md:text-sm text-gray-600">
                    <p>Monday - Friday: 10:00 AM - 09:00 PM</p>
                    <p>Saturday: 10:00 AM - 09:00 PM</p>
                    <p>Sunday: Closed || Opened - Subject to appointments</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 md:col-span-1 flex items-center justify-center gap-2 md:gap-3 bg-secondary text-white px-4 md:px-6 py-3 md:py-4 rounded-xl hover:bg-secondary/90 transition-colors shadow-md font-semibold text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
