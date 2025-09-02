import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'deluxmodpack',
    title: 'DeluxModPack',
    description: 'Modpack para GTA V focado em roleplay singleplayer. Site finalizado com modpack em versão beta, desenvolvido como projeto pessoal e gratuito.',
    image: 'https://i.imgur.com/PKoaIus.png',
    status: 'Site finalizado, modpack em beta',
    development_time: '1 mês',
    type: 'Projeto pessoal e gratuito',
    link: 'https://deluxgtav.netlify.app',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'espaco-familiares',
    title: 'Espaço Familiares',
    description: 'Site para espaço de eventos em Vargem Grande. Ambiente rural e relaxante com IA integrada. Projeto comercial real desenvolvido para cliente.',
    image: 'https://i.imgur.com/VcH5Kgf.png',
    status: 'Finalizado',
    development_time: '3 semanas',
    type: 'Projeto comercial',
    link: 'https://espacofamiliares.netlify.app',
    technologies: ['React', 'IA Integration', 'CSS']
  },
  {
    id: 'quiz-venezuela',
    title: 'Quiz Venezuela',
    description: 'Quiz interativo com 5 questões sobre Venezuela. Desenvolvido como serviço comercial para cliente específico.',
    image: 'https://i.imgur.com/nVqMBpD.png',
    status: 'Finalizado',
    development_time: '1 semana',
    type: 'Projeto comercial',
    link: 'https://quizvenezuela.onrender.com',
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
];