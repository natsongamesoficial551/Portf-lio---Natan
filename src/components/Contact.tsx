import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactImage = "https://neilpatel.com/wp-content/uploads/2019/09/codigos-html-para-paginas-web-1-1200x675.webp";
  const whatsappNumber = "+5521992826074";
  
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pronto para transformar suas ideias em realidade digital
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-lg"></div>
            <img 
              src={contactImage}
              alt="Contato NatanDEV"
              className="relative w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Entre em contato comigo
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Estou sempre aberto a novos projetos e oportunidades. Se você tem uma ideia incrível ou precisa de um desenvolvedor dedicado, vamos conversar!
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 rounded-xl transition-all duration-200 hover:scale-105 group"
              >
                <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400 mr-3 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-300">WhatsApp</p>
                  <p className="text-green-600 dark:text-green-400">{whatsappNumber}</p>
                </div>
              </a>

              <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Telefone</p>
                  <p className="text-gray-600 dark:text-gray-300">{whatsappNumber}</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-xl">
                <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Localização</p>
                  <p className="text-gray-600 dark:text-gray-300">Rio de Janeiro, Brasil</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Iniciar Conversa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};