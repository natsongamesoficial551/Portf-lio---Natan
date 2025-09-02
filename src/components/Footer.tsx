import React from 'react';
import { Code, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">NatanDEV</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Desenvolvido com</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>e muito</span>
            <Code className="w-4 h-4 text-blue-500" />
            <span>por NatanDEV</span>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 NatanDEV. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Jovem desenvolvedor transformando ideias em código</p>
        </div>
      </div>
    </footer>
  );
};