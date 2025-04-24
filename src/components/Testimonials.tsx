
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Professional",
      quote: "Learning Hindi at Mahathma Hindi College has been transformative. The teachers are incredibly knowledgeable and patient, and I've gained not just language skills but cultural understanding too.",
      rating: 5,
      image: ""
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "University Student",
      quote: "As someone studying international relations, Mahathma Hindi College has been an invaluable resource. Their approach blends language learning with cultural context in a way that's engaging and effective.",
      rating: 5,
      image: ""
    },
    {
      id: 3,
      name: "Amina Patel",
      role: "Heritage Learner",
      quote: "Growing up in a diaspora family, I wanted to reconnect with my roots. The teachers here helped me not only learn the language but also understand my cultural heritage on a deeper level.",
      rating: 4,
      image: ""
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-hindi-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <div className="w-20 h-1 bg-hindi-maroon mx-auto mb-6"></div>
          <p className="text-gray-600">Hear from our students about their experiences learning Hindi at our institution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hindi-saffron to-hindi-deepBlue flex items-center justify-center text-white font-bold text-lg mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < testimonial.rating ? "#F1C40F" : "none"}
                      stroke={i < testimonial.rating ? "#F1C40F" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="relative">
                <svg
                  className="absolute -top-4 -left-4 w-8 h-8 text-hindi-saffron/20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                <p className="pl-2 text-gray-700">{testimonial.quote}</p>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="text-hindi-deepBlue hover:text-hindi-navy font-medium underline">Read More Student Success Stories</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
