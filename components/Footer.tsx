import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 md:pb-8 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                <Image
                    src="/assests/logo-1.png"
                    alt="Avinash Dental Care Logo"
                    width={80}
                    height={80}
                    priority
                    className="object-contain"
                  />

              </div>
              <span className="text-xl font-semibold">Avinash Dental Care</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional dental care with a focus on your comfort and satisfaction.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Near TowerClock Centre</li>
              <li>Gudur Town - Nellore District</li>
              <li>Andhrapradesh - 524101</li>
              <li><a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a></li>
              <li><a href="mailto:info@dentalclinic.com" className="hover:text-white transition-colors">info@dentalclinic.com</a></li>
            </ul>
          </div>

          
        </div>
      </div>

       <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 SmileCare Dental. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#FFE4D6] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#FFE4D6] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#FFE4D6] transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
}
