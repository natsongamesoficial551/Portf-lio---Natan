import React from 'react';
import { Brain, Code2, Database, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const profileImage = "https://i.imgur.com/YaxbUFi.jpeg";

  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Front-end",
      description: "Estudante principal em React, TypeScript e design responsivo"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Back-end",
      description: "Conhecimentos básicos em HTML, Python, Node.js, CSS e integração de APIs"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Inteligência Artificial",
      description: "Desenvolvimento auxiliado por IA e integração de APIs avançadas"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Full-stack",
      description: "Em constante aprendizado para se tornar desenvolvedor completo"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-lg"></div>
            <img 
              src={profileImage}
              alt="NatanDEV - Desenvolvedor Full-Stack"
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Aos 15 anos, sou um desenvolvedor apaixonado por programação que descobriu no código uma forma de transformar ideias em realidade digital. Minha jornada começou cedo e desde então venho desenvolvendo projetos que combinam criatividade, tecnologia e inovação.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Minha especialidade é o <strong className="text-blue-600 dark:text-blue-400">front-end</strong>, onde crio interfaces modernas e funcionais com o auxílio de inteligência artificial. Tenho conhecimentos em back-end e estou constantemente aprendendo para me tornar um desenvolvedor full-stack completo.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Meu diferencial está na capacidade de Criar <strong className="text-purple-600 dark:text-purple-400">IA Básica</strong>, trabalhar com bancos de dados e utilizar IA para otimizar o processo de desenvolvimento, criando soluções profissionais mesmo em pouco tempo.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.title}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
