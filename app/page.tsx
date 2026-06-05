import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import AppointmentForm from '../components/AppointmentForm';
import Contact from '../components/Contact';
import FAQ from '../components/faq';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <AppointmentForm />
      <Contact />
      <FAQ />
    </>
  );
}