import { Bot, Cloud, Layout, Users, Mail, Linkedin } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import { uiContent, projectsData } from './data/projects';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SkillBlock } from './components/SkillBlock';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';

function App() {
  const { language } = useLanguage();
  
  // Atalhos para facilitar o acesso aos dados traduzidos
  const t = uiContent[language];
  const projects = projectsData[language];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Header />

      <main className="max-w-6xl mx-auto px-6">
        <Hero />

        {/* Sobre Mim */}
        <section className="py-20 border-t border-gray-100">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8 text-slate-700">
              {t.aboutTitle}
            </h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed text-justify">
              <p dangerouslySetInnerHTML={{ __html: t.aboutText1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.aboutText2 }} />
              <p dangerouslySetInnerHTML={{ __html: t.aboutText3 }} />
              <p dangerouslySetInnerHTML={{ __html: t.aboutText4 }} />
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="py-20 border-t border-gray-100">
          <h2 className="text-5xl font-bold text-slate-700 mb-16 border-b-4 border-red-500 inline-block pb-2">
            {t.skillsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            <SkillBlock 
              icon={Bot} 
              title={t.skillsIA} 
              skills={t.skillsIAList} 
            />
            <SkillBlock 
              icon={Cloud} 
              title={t.skillsSoftware} 
              skills={t.skillsSoftwareList} 
            />
            <SkillBlock 
              icon={Layout} 
              title={t.skillsFrontend} 
              skills={t.skillsFrontendList} 
            />
            <SkillBlock 
              icon={Users} 
              title={t.skillsMethodology} 
              skills={t.skillsMethodologyList} 
            />
          </div>
        </section>

        {/* Experiência */}
        <section className="py-20 border-t border-gray-100">
          <h2 className="text-5xl font-bold text-slate-700 mb-16 border-b-4 border-red-500 inline-block pb-2">
            {t.experienceTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.experiences.map((exp, index) => (
              <ExperienceCard 
                key={index}
                company={exp.company}
                role={exp.role}
                period={exp.period}
                isPrimary={exp.isPrimary}
                highlights={exp.highlights}
              />
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section className="py-20 border-t border-gray-100">
          <h2 className="text-5xl font-bold text-slate-700 mb-16 border-b-4 border-red-500 inline-block pb-2">
            {t.projectsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        {/* Contato */}
        <section className="py-20 border-t border-gray-100 mt-20">
          <h2 className="text-4xl font-bold text-slate-700 mb-12 border-b-4 border-red-500 inline-block pb-1">
            {t.contactTitle}
          </h2>
          <div className="space-y-10">
            <p className="text-gray-500 text-lg">{t.contactSubtitle}</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <Mail className="text-red-500" size={24} />
                <a href="mailto:augustocsar97@gmail.com" className="text-gray-500 hover:text-red-500 border-b border-dotted border-gray-400 hover:border-red-500 transition-all text-lg">
                  augustocsar97@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 group">
                <Linkedin className="text-red-500" size={24} />
                <a href="https://linkedin.com/in/augustocsar/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 border-b border-dotted border-gray-400 hover:border-blue-600 transition-all text-lg">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;