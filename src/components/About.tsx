
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Mahathma Hindi College</h2>
          <div className="w-20 h-1 bg-hindi-saffron mx-auto mb-6"></div>
          <p className="text-gray-600">Dedicated to promoting and preserving the Hindi language through innovative teaching methods and cultural immersion.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCQkJCQkIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6TTQwIDQwaDQwdjQwSDQweiIvPjwvZz48L2c+PC9zdmc+')] p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-hindi-saffron flex items-center justify-center text-white font-bold text-4xl mx-auto mb-4">
                      ह
                    </div>
                    <p className="text-lg font-serif">Mahathma Hindi College</p>
                    <p className="text-sm">Established 1985</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 hindi-accent-border rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Founded in 1985, Mahathma Hindi College has been at the forefront of Hindi language education for over three decades. Our institution is committed to promoting Hindi as a global language while preserving its rich literary and cultural heritage.
            </p>

            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-hindi-light p-4 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-hindi-saffron flex items-center justify-center text-white mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                    <path d="M12 13v8"></path>
                    <path d="M12 3v3"></path>
                  </svg>
                </div>
                <h4 className="font-bold mb-1">Cultural Preservation</h4>
                <p className="text-sm text-gray-600">Preserving Hindi's rich cultural heritage</p>
              </div>

              <div className="bg-hindi-light p-4 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-hindi-deepBlue flex items-center justify-center text-white mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="10" r="3"></circle>
                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                  </svg>
                </div>
                <h4 className="font-bold mb-1">Student-Centered</h4>
                <p className="text-sm text-gray-600">Focusing on individual student needs</p>
              </div>

              <div className="bg-hindi-light p-4 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-hindi-navy flex items-center justify-center text-white mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" x2="4" y1="22" y2="15"></line>
                  </svg>
                </div>
                <h4 className="font-bold mb-1">Innovation</h4>
                <p className="text-sm text-gray-600">Embracing modern teaching approaches</p>
              </div>

              <div className="bg-hindi-light p-4 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-hindi-maroon flex items-center justify-center text-white mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M12 8v8"></path>
                    <path d="M8 12h8"></path>
                  </svg>
                </div>
                <h4 className="font-bold mb-1">Inclusivity</h4>
                <p className="text-sm text-gray-600">Making Hindi accessible to all</p>
              </div>
            </div>

            <Button className="bg-hindi-deepBlue hover:bg-hindi-deepBlue/90">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
