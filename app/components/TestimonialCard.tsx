import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({ name, review, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex-shrink-0 w-64 md:w-72">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 text-sm mb-4 line-clamp-4">{review}</p>
      <p className="font-semibold text-gray-800">{name}</p>
    </div>
  );
}
