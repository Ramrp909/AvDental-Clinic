'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  problem: string;
  date: string;
  time: string;
  promoCode?: string;
}


export default function AppointmentForm() {
  const [isSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  // const onSubmit = (data: FormData) => {
  //   console.log('Form submitted:', data);
  //   setIsSubmitted(true);
  //   reset();
  //   setTimeout(() => setIsSubmitted(false), 5000);
  // };

  const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch('/api/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log(response)

    const result = await response.json();

    if (result.success) {
      alert('Appointment request sent!');
    } else {
      alert(result.error || 'Something went wrong');
    }
  } catch (error) {
    console.error(error);
    alert('Failed to send appointment request');
  }
};

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-10 md:py-16 bg-gradient-to-br from-accent to-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Appointment Request Received!
            </h3>
            <p className="text-gray-600">
              Thank you for choosing our dental clinic. We will contact you shortly to confirm your appointment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-12 md:py-16 bg-gradient-to-br from-accent to-primary-light">
      <div className="container mx-auto px-3">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Calendar className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Book an Appointment
              </h2>
            </div>
            <p className="text-gray-600">
              Fill out the form below and we will get back to you as soon as possible
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-4 md:p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone is required' })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="+1 (234) 567-890"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                Describe Your Problem *
              </label>
              <textarea
                id="problem"
                {...register('problem', { required: 'Please describe your problem' })}
                rows={4}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your dental concern..."
              />
              {errors.problem && (
                <p className="text-red-500 text-sm mt-1">{errors.problem.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                  {...register('date', { required: 'Date is required' })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  id="time"
                  {...register('time', { required: 'Time is required' })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="18:00">6:00 PM</option>
                </select>
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700 mb-2">
                Promo Code (Optional)
              </label>
              <input
                type="text"
                id="promoCode"
                {...register('promoCode')}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Enter promo code if you have one"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-colors shadow-md font-semibold text-lg"
            >
              Book Appointment
            </button>
             {/* Trust Signals */}
          <div className="mt-8 pt-6 border-t text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              ✓ We respond within 2 hours • ✓ No obligation • ✓ Free consultation
            </p>
            <p className="text-xs text-muted-foreground">
              Your information is protected by HIPAA privacy standards
            </p>
          </div>


        {/* Emergency Contact */}
        <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200 text-center">
          <p className="text-sm font-semibold text-red-900 mb-1">
            Have a dental emergency?
          </p>
          <a
            href="tel:+1234567890"
            className="text-lg font-bold text-red-700 hover:text-red-800"
          >
            Call Now: (123) 456-7890
          </a>
        </div>
          </form>

          
        </div>
      </div>
    </section>
  );
}
