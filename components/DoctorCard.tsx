import { Award } from 'lucide-react';
import Image from "next/image";

interface DoctorCardProps {
  name: string;
  specialization: string;
  image: string;
  experience?: string;
}

export default function DoctorCard({ name, specialization, image, experience }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-[3/4] relative bg-gray-100">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-primary font-medium mb-2">{specialization}</p>
        {experience && (
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Award className="w-4 h-4" />
            <span>{experience}</span>
          </div>
        )}
      </div>
    </div>
  );
}
