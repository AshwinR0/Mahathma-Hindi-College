
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Hindi Beginners",
      level: "Beginner",
      duration: "12 weeks",
      schedule: "Mon & Wed, 6-8 PM",
      description: "Perfect for absolute beginners. Learn the Hindi alphabet, basic vocabulary, and simple conversational phrases.",
      features: ["Alphabet & Pronunciation", "Basic Grammar", "Everyday Phrases", "Cultural Introduction"],
      color: "bg-hindi-saffron"
    },
    {
      id: 2,
      title: "Intermediate Hindi",
      level: "Intermediate",
      duration: "16 weeks",
      schedule: "Tue & Thu, 6-8 PM",
      description: "Build on basic knowledge with more complex grammar, expanded vocabulary, and conversation practice.",
      features: ["Advanced Grammar", "Reading & Writing", "Conversation Practice", "Cultural Insights"],
      color: "bg-hindi-deepBlue"
    },
    {
      id: 3,
      title: "Advanced Hindi",
      level: "Advanced",
      duration: "20 weeks",
      schedule: "Sat, 10 AM-2 PM",
      description: "Perfect your Hindi with advanced grammar, literary texts, poetry, and sophisticated conversation skills.",
      features: ["Complex Grammar", "Literary Texts", "Speech & Debate", "Cultural Deep Dive"],
      color: "bg-hindi-navy"
    },
    {
      id: 4,
      title: "Hindi for Professionals",
      level: "Specialized",
      duration: "8 weeks",
      schedule: "Online, Flexible",
      description: "Specialized course focusing on business and professional Hindi vocabulary and communication.",
      features: ["Business Vocabulary", "Professional Writing", "Meeting Etiquette", "Corporate Culture"],
      color: "bg-hindi-maroon"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hindi Courses</h2>
          <div className="w-20 h-1 bg-hindi-deepBlue mx-auto mb-6"></div>
          <p className="text-gray-600">Choose from our range of comprehensive Hindi language programs designed for different proficiency levels.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className={`${course.color} text-white`}>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="text-white border-white">
                    {course.level}
                  </Badge>
                  <div className="text-right">
                    <p className="text-sm font-medium">{course.duration}</p>
                    <p className="text-xs opacity-80">{course.schedule}</p>
                  </div>
                </div>
                <CardTitle className="mt-4 text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-gray-600 mb-4">
                  {course.description}
                </CardDescription>
                <div className="space-y-2">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`w-2 h-2 ${course.color} rounded-full mr-2`}></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Not sure which course is right for you? Take our free assessment test.</p>
          <Button className="bg-hindi-accent text-hindi-navy hover:bg-hindi-accent/90">Take Placement Test</Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
