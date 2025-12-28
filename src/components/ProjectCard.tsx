import type { Project } from '../data/projects';

export function ProjectCard({ title, description, detailedDescription, image, tools, githubUrl, githubUrlSecondary }: Project) {
  return (
    <div className="flex flex-col">
      <div className="rounded-xl overflow-hidden mb-8 shadow-lg border border-gray-100 aspect-video bg-slate-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>

      <div className="space-y-4">
        <p className="text-gray-500 leading-relaxed text-justify">
          {description}
        </p>
        {detailedDescription && (
          <p className="text-gray-500 leading-relaxed text-justify">
            {detailedDescription}
          </p>
        )}
      </div>

      <h4 className="font-bold text-slate-700 mt-8 mb-4">As ferramentas utilizadas foram:</h4>
      <ul className="text-gray-500 space-y-2 list-disc pl-5 mb-8">
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {githubUrlSecondary && (
             <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Repositório Backend</span>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block w-fit px-6 py-2 border-2 border-red-500 text-red-500 font-bold uppercase text-sm hover:bg-red-500 hover:text-white transition-all"
          >
            Saiba Mais
          </a>
        </div>

        {githubUrlSecondary && (
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Repositório Frontend</span>
            <a
              href={githubUrlSecondary}
              target="_blank"
              rel="noreferrer"
              className="inline-block w-fit px-6 py-2 border-2 border-slate-800 text-slate-800 font-bold uppercase text-sm hover:bg-slate-800 hover:text-white transition-all"
            >
              Saiba Mais
            </a>
          </div>
        )}
      </div>
    </div>
  );
}