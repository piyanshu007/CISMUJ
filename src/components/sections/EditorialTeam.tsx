'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TEAM_MEMBERS, TeamMember } from '@/data/team';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const EditorialTeam: React.FC = () => {
  const [activeMemberId, setActiveMemberId] = useState<string>(TEAM_MEMBERS[0].id);

  return (
    <section id="team" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          badgeText="STUDENT LEADERSHIP"
          title="EXECUTIVE COMMITTEE."
          subtitle="The student leaders, directors, and researchers orchestrating IEEE CIS MUJ initiatives, workshops, and hackathons."
        />

        {/* Numbered List */}
        <div className="border-t border-slate-200 divide-y divide-slate-200 mt-10">
          {TEAM_MEMBERS.map((member: TeamMember, idx: number) => {
            const isActive = member.id === activeMemberId;

            return (
              <div
                key={member.id}
                onClick={() => setActiveMemberId(member.id)}
                onMouseEnter={() => setActiveMemberId(member.id)}
                className={`py-6 px-6 rounded-xl transition-all cursor-pointer font-mono text-xs ${
                  isActive
                    ? 'bg-slate-50 border border-sky-600 shadow-xs'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Number & Name */}
                  <div className="flex items-start sm:items-center gap-4">
                    <span
                      className={`text-xl sm:text-2xl font-extrabold tracking-wider ${
                        isActive ? 'text-sky-600' : 'text-slate-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 uppercase tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-sky-700 font-sans font-bold mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Specialization & Department */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded bg-white border border-slate-200 text-slate-800 text-[11px] font-bold">
                      {member.department}
                    </span>
                    <Badge variant={isActive ? 'blue' : 'default'} dot>
                      {member.badge}
                    </Badge>
                  </div>
                </div>

                {/* Expanded Details on Active */}
                {isActive && (
                  <div className="mt-5 pt-5 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center font-sans">
                    <div className="lg:col-span-8 space-y-2">
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="font-mono text-[11px] text-slate-500 font-semibold">
                        CORE DOMAIN: <span className="text-slate-900 font-bold">{member.specialization}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex items-center lg:justify-end gap-2 font-mono text-xs">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg bg-white hover:bg-sky-600 hover:text-white text-slate-700 border border-slate-200 transition-all shadow-xs"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg bg-white hover:bg-sky-600 hover:text-white text-slate-700 border border-slate-200 transition-all shadow-xs"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2.5 rounded-lg bg-white hover:bg-sky-600 hover:text-white text-slate-700 border border-slate-200 transition-all shadow-xs"
                          aria-label="Email"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
