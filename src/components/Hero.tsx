
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
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
    <section id="home" className="relative py-20 md:py-28 pattern-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 z-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover the Beauty of
              <span className="text-hindi-saffron"> Hindi </span>
              Language
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Learn one of the world's most widely spoken languages with our expert teachers and immersive cultural approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-hindi-saffron hover:bg-hindi-saffron/90 text-white px-8 py-6 text-lg"
                onClick={() => scrollToSection('enrollment')}>
                Start Learning
              </Button>
              <Button variant="outline" className="border-hindi-deepBlue text-hindi-deepBlue hover:bg-hindi-deepBlue/10 px-8 py-6 text-lg"
                onClick={() => scrollToSection('courses')}>
                Explore Courses
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-hindi-saffron flex items-center justify-center text-white">1</div>
                <div className="w-10 h-10 rounded-full bg-hindi-deepBlue flex items-center justify-center text-white">2</div>
                <div className="w-10 h-10 rounded-full bg-hindi-navy flex items-center justify-center text-white">3</div>
                <div className="w-10 h-10 rounded-full bg-hindi-maroon flex items-center justify-center text-white">4</div>
              </div>
              <p className="text-sm text-gray-600">Join <span className="font-bold">5,000+</span> students worldwide</p>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-hindi-saffron to-hindi-deepBlue rounded-lg overflow-hidden shadow-xl">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-serif mb-4">हिन्दी सीखें</h3>
                  <p className="mb-2 text-lg">Learn Hindi</p>
                  <p className="text-hindi-light text-sm">Experience the rich culture and heritage of India through its language</p>
                </div>

                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 flex items-end justify-end p-6">
                  <div className="w-full max-w-xs p-6 bg-white/90 backdrop-blur rounded-lg shadow-lg">
                    <h4 className="font-heading font-medium mb-2 text-hindi-navy">Our Approach</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-hindi-saffron rounded-full mr-2"></div>
                        <span className="text-sm">Conversational Focus</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-hindi-deepBlue rounded-full mr-2"></div>
                        <span className="text-sm">Cultural Immersion</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-hindi-navy rounded-full mr-2"></div>
                        <span className="text-sm">Native Teachers</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-hindi-maroon rounded-full mr-2"></div>
                        <span className="text-sm">Personalized Learning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-hindi-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-hindi-saffron/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V92.83C67.81,118.92,144.29,111.31,214.34,92.83Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
