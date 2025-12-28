import type { LucideIcon } from 'lucide-react';

interface SkillBlockProps {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export function SkillBlock({ icon: Icon, title, skills }: SkillBlockProps) {
  return (
    <div className="flex gap-8 items-start">
      <div className="min-w-20 h-20 border-2 border-gray-100 rotate-45 flex items-center justify-center bg-white shadow-sm hover:border-red-500 transition-colors">
        <div className="-rotate-45 text-red-500">
          <Icon size={32} strokeWidth={1.5} />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-slate-700 mb-6">{title}</h3>
        <ul className="text-gray-500 space-y-3 list-disc pl-4 text-justify">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}