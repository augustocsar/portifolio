import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { uiContent } from '../data/projects';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = uiContent[language];

  return (
    <header className="max-w-6xl mx-auto p-6 flex justify-between items-end border-b-4 border-red-500 pb-2 mb-16">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold uppercase tracking-tight text-slate-800">
          {t.headerTitle} <span className="text-gray-400 font-light lowercase text-lg">{t.headerSubtitle}</span>
        </h1>
      </div>

      <div className="flex flex-col items-end gap-4">
        {/* Seleção de Idioma */}
        <div className="flex gap-2">
          <button 
            onClick={() => setLanguage('PT')}
            className={`px-3 py-1 border font-bold rounded text-xs transition-all ${language === 'PT' ? 'border-red-500 text-red-500' : 'border-gray-300 text-gray-400 opacity-50'}`}
          >
            PT
          </button>
          <button 
            onClick={() => setLanguage('EN')}
            className={`px-3 py-1 border font-bold rounded text-xs transition-all ${language === 'EN' ? 'border-red-500 text-red-500' : 'border-gray-300 text-gray-400 opacity-50'}`}
          >
            EN
          </button>
        </div>
        
        {/* Redes Sociais */}
        <div className="flex gap-4 mb-1">
          <a href="https://github.com/augustocsar" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/augustocsar/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}