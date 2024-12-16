import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  Phone?: string;
}

interface Member {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLinks;
}

const Members = () => {
  const members: Member[] = [
    {
      name: "Sarah Johnson",
      role: "President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Final year Computer Science student passionate about technology and community building.",
      social: {
        email: "mailto:sarah@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        Phone: "https://wa.me/1234567890"
      }
    },
    {
      name: "Naami Ahmed",
      role: "Vice President",
      image: "src/public/assets/Naami.jpg",
      bio: "Final year IT student passionate about technology and community building with a focus on sustainable development and innovation.",
      social: {
        email: "mailto:naamisaleem5002@gmail.com",
        linkedin: "https://www.linkedin.com/in/naami-ahmed/",
        github: "https://github.com/naamiahmed",
        Phone: "https://wa.me/94702652676"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Secretary",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Business Administration student specializing in project management and event planning.",
      social: {
        email: "mailto:emily@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    },
    {
      name: "David Kim",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Economics major with experience in financial planning and budget management.",
      social: {
        email: "mailto:david@example.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      }
    }
  ];

  return (
    <section id="members" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">Meet the dedicated individuals leading our association</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative group">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.email}
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-indigo-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {member.social.Phone && (
                    <a
                      href={member.social.Phone}
                      className="text-gray-400 hover:text-indigo-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;