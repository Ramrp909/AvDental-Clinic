import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
// import { Card } from "./ui/card";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

const credentials = [
  "Doctor of Dental Surgery (DDS)",
  "Board Certified in General Dentistry",
  "Member, American Dental Association",
  "Certified in Cosmetic Dentistry",
  "Advanced Training in Implantology",
  "HIPAA Privacy Compliant",
];
/* eslint-disable @next/next/no-img-element */

export default function DoctorProfile() {
  return (
    <section className="py-8 md:py-10 bg-hero-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
        
            <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-8 items-center">
            {/* Left: Doctor Image */}
            <div className="relative">
              <Image
              width={200}
              height={200}
                src="https://images.unsplash.com/photo-1667133295308-9ef24f71952e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgwMTIwOTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dr. Sarah Johnson"
                className="w-full h-full object-cover rounded-2xl min-h-[280px] md:min-h-[280px_1fr]"
              />
              
              {/* HIPAA Badge */}
              {/* <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#2D9E6F]" />
                <div>
                  <div className="text-xs font-semibold text-foreground">HIPAA</div>
                  <div className="text-xs text-muted-foreground">Privacy Shield</div>
                </div>
              </div> */}
            </div>

            {/* Right: Credentials */}
            <div className="p-4 md:p-6 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Dr. Sarah Johnson
              </h2>
              <p className="text-lg text-[#0066CC] font-semibold mb-6">
                DDS | Board Certified
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of experience in general and cosmetic dentistry, 
                Dr. Johnson is committed to providing personalized, compassionate care 
                to every patient. Her approach combines the latest dental technology 
                with a gentle touch to ensure your comfort.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2D9E6F] flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{credential}</span>
                  </div>
                ))}
              </div>

              {/* Rating */}
              {/* <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-foreground">4.9</span>
                    <span className="text-yellow-500 text-xl">★★★★★</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  from 287 verified patient reviews
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
