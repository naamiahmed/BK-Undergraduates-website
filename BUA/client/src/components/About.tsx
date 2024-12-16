import React from 'react';
import { Target, Users, Heart, BookOpen } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: "Our Mission",
      description: "To foster academic excellence and professional development among undergraduates while serving our community."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: "Our Vision",
      description: "To be the leading undergraduate association that empowers students to achieve their full potential."
    },
    {
      icon: <Heart className="h-8 w-8 text-indigo-600" />,
      title: "Our Values",
      description: "Unity, Excellence, Innovation, and Community Service guide everything we do."
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Our Community",
      description: "A diverse network of passionate students working together to create positive change."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">Empowering students and building tomorrow's leaders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-indigo-50 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;