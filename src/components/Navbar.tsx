
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm py-4 px-4 md:px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-hindi-saffron flex items-center justify-center text-white font-bold text-xl">
            ह
          </div>
          <h1 className="text-2xl font-heading font-bold">
            <span className="text-hindi-saffron">Mahathma</span>
            <span className="text-hindi-deepBlue">Hindi</span>
            <span className="text-hindi-navy">College</span>
          </h1>
        </div>

        <div className={`${isMenuOpen ? 'flex flex-col absolute top-16 left-0 right-0 bg-white shadow-md p-4 space-y-4 md:space-y-0 transition-all duration-300 ease-in-out z-40' : 'hidden'} md:flex md:space-x-6 md:items-center md:static md:shadow-none md:p-0 md:bg-transparent`}>
          <button onClick={() => scrollToSection('home')} className="font-medium hover:text-hindi-saffron transition-colors text-left">Home</button>
          <button onClick={() => scrollToSection('about')} className="font-medium hover:text-hindi-saffron transition-colors text-left">About</button>
          <button onClick={() => scrollToSection('courses')} className="font-medium hover:text-hindi-saffron transition-colors text-left">Courses</button>
          <button onClick={() => scrollToSection('teachers')} className="font-medium hover:text-hindi-saffron transition-colors text-left">Teachers</button>
          <button onClick={() => scrollToSection('testimonials')} className="font-medium hover:text-hindi-saffron transition-colors text-left">Testimonials</button>
          <button onClick={() => scrollToSection('enrollment')} className="font-medium hover:text-hindi-saffron transition-colors text-left">Enrollment</button>
          <button onClick={() => scrollToSection('contact')} className="font-medium hover:text-hindi-saffron transition-colors text-left">Contact</button>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            className="bg-hindi-saffron hover:bg-hindi-saffron/90"
            onClick={() => scrollToSection('enrollment')}
          >
            Enroll Now
          </Button>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
