import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all touch-grow cursor-pointer group">
      <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center mb-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
    </div>
  );
}
