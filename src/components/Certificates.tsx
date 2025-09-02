import React from 'react';
import { Award } from 'lucide-react';
import { certificates } from '../data/certificates';

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certificações
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conhecimentos validados e em constante evolução
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div 
              key={certificate.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative mb-6">
                <img 
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 rounded-lg">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {certificate.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {certificate.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};