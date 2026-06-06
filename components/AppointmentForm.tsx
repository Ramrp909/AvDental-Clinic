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
  
  const { register, handleSubmit,reset,watch, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
const [showSuccessModal, setShowSuccessModal] = useState(false);

  // const onSubmit = (data: FormData) => {
  //   console.log('Form submitted:', data);
  //   setIsSubmitted(true);
  //   reset();
  //   setTimeout(() => setIsSubmitted(false), 5000);
  // };

//   const onSubmit = async (data: FormData) => {
//   try {
//     const response = await fetch('/api/appointment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     console.log(response)

//     const result = await response.json();

//     if (result.success) {
//       alert('Appointment request sent!');
//     } else {
//       alert(result.error || 'Something went wrong');
//     }
//   } catch (error) {
//     console.error(error);
//     alert('Failed to send appointment request');
//   }
// };
const allTimeSlots: string[] = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM"
];

const selectedDate = watch("date");

const availableSlots = allTimeSlots.filter((slot: string) => {
  const today = new Date().toISOString().split("T")[0];

  if (selectedDate !== today) {
    return true;
  }

  const now = new Date();
  const [hours, minutes] = slot.split(":").map(Number);

  const slotTime = new Date();
  slotTime.setHours(hours, minutes, 0, 0);

  return slotTime > now;
});

const onSubmit = async (data: FormData) => {
  try {
    setIsSubmitting(true);

    const response = await fetch("/api/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      reset(); // clears form
      setShowSuccessModal(true);
    } else {
      alert(result.error || "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    alert("Failed to send appointment request");
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <section id="appointment" className="py-6 md:py-12 bg-gradient-to-br from-accent to-primary-light">
      <div className="container mx-auto px-3">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-5 md:mb-8">
            <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
                Book an Appointment
              </h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Fill out the form below and we will get back to you as soon as possible
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-3.5 md:p-6 space-y-3 md:space-y-4">
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone is required' })}
                  className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                  placeholder="+1 (234) 567-890"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="problem" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                Describe Your Problem *
              </label>
              <textarea
                id="problem"
                {...register('problem', { required: 'Please describe your problem' })}
                rows={3}
                className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-sm"
                placeholder="Tell us about your dental concern..."
              />
              {errors.problem && (
                <p className="text-red-500 text-xs mt-1">{errors.problem.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label htmlFor="date" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="date"
                   min={new Date().toISOString().split("T")[0]}
                  {...register('date', { required: 'Date is required' })}
                  className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                />
                {errors.date && (
                  <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="time" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                  Preferred Time *
                </label>
                <select {...register("time", { required: true })}
                className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm">
  <option value="">Select Time</option>

  {availableSlots.map((slot: string) => (
    <option key={slot} value={slot}>
      {slot}
    </option>
  ))}
</select>
                {errors.time && (
                  <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="promoCode" className="block text-xs md:text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                Promo Code (Optional)
              </label>
              <input
                type="text"
                id="promoCode"
                {...register('promoCode')}
                className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                placeholder="Enter promo code if you have one"
              />
            </div>

            {/* <button
              type="submit"
              className="w-full bg-primary text-white px-6 md:px-8 py-2.5 md:py-3.5 rounded-lg hover:bg-primary/90 transition-colors shadow-md font-semibold text-sm md:text-lg"
            >
              Book Appointment
            </button> */}

            <button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-primary text-white px-6 md:px-8 py-2.5 md:py-3.5 rounded-lg hover:bg-primary/90 transition-colors shadow-md font-semibold text-sm md:text-lg disabled:opacity-60 disabled:cursor-not-allowed"
>
  {isSubmitting ? "Sending Request..." : "Book Appointment"}
</button>
            {/* Trust Signals */}
          <div className="mt-4 md:mt-6 pt-3 md:pt-6 border-t text-center space-y-1.5 md:space-y-2">
            <p className="text-xs md:text-sm text-muted-foreground">
              ✓ We respond within 2 hours • ✓ No obligation • ✓ Free consultation
            </p>
            <p className="text-xs text-muted-foreground">
              Your information is kept secure and used only for appointment scheduling.
            </p>
          </div>


        {/* Emergency Contact */}
        <div className="mt-4 md:mt-6 p-3 md:p-4 bg-red-50 rounded-lg border border-red-200 text-center">
          <p className="text-xs md:text-sm font-semibold text-red-900 mb-1">
            Have a dental emergency?
          </p>
          <a
            href="tel:+1234567890"
            className="text-base md:text-lg font-bold text-red-700 hover:text-red-800"
          >
            Call Now: (123) 456-7890
          </a>
        </div>
          </form>

          
        </div>
      </div>
      {showSuccessModal && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center">
      <div className="text-5xl mb-4">✅</div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Appointment Request Received
      </h3>

      <p className="text-gray-600 mb-6">
        Thank you for contacting Avinash Dental Care.
        <br />
        Our team will contact you within 2 working hours to confirm your appointment.
      </p>

      <button
        onClick={() => setShowSuccessModal(false)}
        className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90"
      >
        Close
      </button>
    </div>
  </div>
)}
    </section>
    
  );
}
