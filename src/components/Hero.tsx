import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
          <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NatanDEV
            </span>
          </h1>
        </div>
        
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Desenvolvedor Full-Stack Iniciante de 15 anos apaixonado por programação
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-lg text-gray-500 dark:text-gray-400 mb-8">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <span>Iniciante em Front-end • IA • APIs</span>
          <Sparkles className="w-5 h-5 text-purple-500" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="#projects"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Ver Projetos
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Entrar em Contato
          </a>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};