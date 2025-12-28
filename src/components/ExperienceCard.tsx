interface ExperienceProps {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  isPrimary?: boolean;
}

export function ExperienceCard({ company, role, period, highlights, isPrimary }: ExperienceProps) {
  const borderColor = isPrimary ? 'hover:border-red-500' : 'hover:border-slate-400';
  const tagColor = isPrimary ? 'text-red-500' : 'text-slate-500';
  const bulletColor = isPrimary ? 'text-red-500' : 'text-slate-400';

  return (
    <div className={`p-8 border border-gray-200 rounded-2xl hover:shadow-2xl ${borderColor} transition-all duration-300 group`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className={`${tagColor} font-black text-sm uppercase tracking-widest`}>{company}</span>
          <h4 className="text-2xl font-bold text-slate-700 mt-1">{role}</h4>
        </div>
        <span className="text-gray-400 text-xs font-medium bg-gray-50 px-3 py-1 rounded-full">{period}</span>
      </div>

      <ul className="text-gray-500 space-y-4 text-sm leading-relaxed">
        {highlights.map((item, index) => (
          <li key={index} className="flex gap-2">
            <span className={`${bulletColor} font-bold`}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}