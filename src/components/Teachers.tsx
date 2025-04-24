
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Dr. Anjali Sharma",
      title: "Hindi Literature Professor",
      experience: "20+ years",
      education: "Ph.D. in Hindi Literature, Delhi University",
      specialization: "Classical Hindi Literature",
      bio: "An expert in classical Hindi literature with over 20 years of teaching experience at prestigious institutions across India and abroad."
    },
    {
      id: 2,
      name: "Rajesh Verma",
      title: "Language Instructor",
      experience: "15+ years",
      education: "M.A. in Hindi Language Teaching, JNU",
      specialization: "Conversational Hindi",
      bio: "Specializes in making Hindi accessible to non-native speakers through innovative teaching methods and real-world applications."
    },
    {
      id: 3,
      name: "Meera Patel",
      title: "Cultural Studies Expert",
      experience: "12+ years",
      education: "M.Phil in Cultural Studies, Mumbai University",
      specialization: "Hindi Culture & Media",
      bio: "Combines language instruction with cultural insights, helping students understand the context and usage of Hindi in everyday life."
    },
    {
      id: 4,
      name: "Prof. Vikram Singh",
      title: "Linguistics Expert",
      experience: "18+ years",
      education: "Ph.D. in Linguistics, Oxford University",
      specialization: "Hindi Dialectology",
      bio: "A renowned linguist specializing in the various dialects of Hindi and their historical development across different regions."
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Teachers</h2>
          <div className="w-20 h-1 bg-hindi-navy mx-auto mb-6"></div>
          <p className="text-gray-600">Learn from native Hindi speakers with extensive academic backgrounds and teaching experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-hindi-saffron/20 to-hindi-deepBlue/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-serif text-hindi-navy">
                  {teacher.name.charAt(0)}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{teacher.name}</CardTitle>
                <CardDescription className="text-hindi-deepBlue font-medium">
                  {teacher.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-1 text-sm">
                  <div className="flex items-start">
                    <span className="font-semibold w-28">Experience:</span>
                    <span>{teacher.experience}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold w-28">Education:</span>
                    <span>{teacher.education}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold w-28">Specialization:</span>
                    <span>{teacher.specialization}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                  {teacher.bio}
                </p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex justify-center space-x-3 w-full">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <path d="m22 6-10 7L2 6"></path>
                    </svg>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
