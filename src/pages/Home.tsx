import Hero from "../components/Hero/Hero";
import WhyUsContent from "../components/WhyUs/WhyUsContent";
import ProcessContent from "../components/Process/ProcessContent";
import IndustriesContent from "../components/Industries/IndustriesContent";
import TestimonialsContent from "../components/Testimonials/TestimonialsContent";
import FAQsContent from "../components/FAQs/FAQsContent";
import ContactContent from "../components/Contact/ContactContent";
import ServicesContent from "../components/Services/ServicesContent";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyUsContent />
      <ProcessContent />
      <IndustriesContent />
      <ServicesContent />
      <TestimonialsContent />
      <FAQsContent />
      <ContactContent />
    </>
  );
};

export default Home;
