'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      review: 'Exceptional service! The staff was incredibly professional and made me feel comfortable throughout my procedure. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      review: 'Best dental experience I have ever had. The clinic is modern, clean, and the dentists are very skilled. My teeth look amazing!',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      review: 'Very satisfied with the treatment. The team took time to explain everything and answered all my questions patiently.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      review: 'Professional and caring staff. They made my dental visit stress-free. Will definitely be returning for future appointments.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      review: 'Amazing results! The dentist was gentle and skilled. The entire process was smooth and painless. Thank you!',
      rating: 5,
    },
    {
      name: 'James Taylor',
      review: 'Clean facility with state-of-the-art equipment. The staff is friendly and the service is top-notch. Highly recommended!',
      rating: 5,
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-06 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied patients who experienced our quality care.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
