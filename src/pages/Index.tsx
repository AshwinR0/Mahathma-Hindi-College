
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Teachers from '@/components/Teachers';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Enrollment from '@/components/Enrollment';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="courses">
        <Courses />
      </div>
      <div id="teachers">
        <Teachers />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="enrollment">
        <Enrollment />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
