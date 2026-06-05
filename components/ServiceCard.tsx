import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-2.5 sm:p-3 md:p-4 rounded-xl shadow-md hover:shadow-lg transition-all touch-grow cursor-pointer group">
      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary-light rounded-lg flex items-center justify-center mb-2 sm:mb-2.5 md:mb-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors text-xs sm:text-sm">
        {icon}
      </div>
      <h3 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-1.5 md:mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-600 text-xs leading-tight sm:leading-relaxed line-clamp-3">{description}</p>
    </div>
  );
}
