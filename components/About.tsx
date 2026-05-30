import DoctorCard from './DoctorCard';
import DoctorProfile from './DoctorProfile'

export default function About() {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialization: 'General Dentistry',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop',
      experience: '15+ years experience',
    },
    {
      name: 'Dr. Michael Chen',
      specialization: 'Orthodontist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop',
      experience: '12+ years experience',
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialization: 'Cosmetic Dentistry',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop',
      experience: '10+ years experience',
    },
  ];

  return (
    <section id="about" className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced dental professionals are dedicated to providing you with the highest quality care in a comfortable environment.
          </p>
        </div>


          <div className="max-w-5xl mx-auto">
          {/* {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))} */}
          <DoctorProfile />
        </div>
      </div>
    </section>
  );
}
