import React from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col justify-between p-6 sm:p-7 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm card-hover-lift overflow-hidden h-full',
        className
      )}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="primary">{project.categoryLabel}</Badge>
          <Badge variant="ghost" className="bg-[#F8FAFC] border border-[#E2E8F0]">
            {project.sector}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#0F2942] tracking-tight group-hover:text-[#0E6BA8] transition-colors mb-3 leading-snug">
          <Link href={`/proyek/${project.slug}`} className="focus-visible:outline-none">
            {project.title}
          </Link>
        </h3>

        {/* Ringkasan */}
        <p className="text-sm text-[#475569] leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Scope Preview */}
        <div className="pt-4 border-t border-[#E2E8F0] mb-6">
          <span className="text-xs font-bold text-[#0F2942] uppercase tracking-wider block mb-2">
            Lingkup Penanganan Utama:
          </span>
          <ul className="space-y-1.5 text-xs text-[#475569]">
            {project.scope.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <DynamicIcon name="CheckCircle2" size={14} className="text-[#0E6BA8] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
        <span className="text-xs font-bold text-[#0E6BA8] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
          <span>Baca Detail Studi Kasus</span>
          <DynamicIcon name="ArrowRight" size={14} />
        </span>
        <div className="w-8 h-8 rounded-lg bg-[#F0F7FD] text-[#0E6BA8] flex items-center justify-center group-hover:bg-[#0E6BA8] group-hover:text-white transition-colors">
          <DynamicIcon name={project.icon} size={18} />
        </div>
      </div>

      {/* Accent gradient line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 accent-line-gradient opacity-80 group-hover:opacity-100 transition-opacity" />
    </article>
  );
}
