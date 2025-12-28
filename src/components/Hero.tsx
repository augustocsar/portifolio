import { useLanguage } from '../contexts/LanguageContext';
import { uiContent } from '../data/projects';
import fotoPerfil from '../assets/AugustoCesar.jpg';

export function Hero() {
  const { language } = useLanguage();
  const t = uiContent[language];

  return (
    <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8 text-slate-700">
          {t.heroGreeting}
        </h2>
        <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
          <p>{t.heroIntro}</p>
          <p>{t.heroContext}</p>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md">
        <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-gray-100 aspect-square">
          <img
            src={fotoPerfil}
            alt="Augusto César"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}