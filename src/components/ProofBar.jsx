import React from 'react';
import { ShieldCheck, Lock, Users, Target } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ProofBar() {
  const icons = [ShieldCheck, Lock, Users, Target];
  const badges = siteConfig.proofBadges || [];

  return (
    <section className="relative w-full bg-[#0b0c0f] border-y border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-center">
          {badges.map((badge, idx) => {
            const IconComp = icons[idx] || ShieldCheck;

            return (
              <div 
                key={idx} 
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#171920] border border-white/5"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {badge.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
