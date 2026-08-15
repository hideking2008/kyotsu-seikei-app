import React from 'react';
import { DifficultyRank } from '../types';
import { Sparkles, Flame, CheckCircle, Award } from 'lucide-react';

interface DifficultyBadgeProps {
  difficulty?: DifficultyRank;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export const DIFFICULTY_CONFIG: Record<
  DifficultyRank,
  {
    label: string;
    sublabel: string;
    badgeText: string;
    bgClass: string;
    borderClass: string;
    textClass: string;
    gradientClass: string;
    icon: React.ComponentType<{ className?: string }>;
  }
> = {
  S: {
    label: 'Sランク',
    sublabel: '共テ最頻出・必修',
    badgeText: 'S 最頻出',
    bgClass: 'bg-rose-50',
    borderClass: 'border-rose-300',
    textClass: 'text-rose-700',
    gradientClass: 'from-rose-500 to-red-600',
    icon: Flame,
  },
  A: {
    label: 'Aランク',
    sublabel: '共テ頻出・重要',
    badgeText: 'A 頻出',
    bgClass: 'bg-amber-50',
    borderClass: 'border-amber-300',
    textClass: 'text-amber-800',
    gradientClass: 'from-amber-500 to-orange-500',
    icon: Sparkles,
  },
  B: {
    label: 'Bランク',
    sublabel: '標準・差がつく',
    badgeText: 'B 標準',
    bgClass: 'bg-emerald-50',
    borderClass: 'border-emerald-300',
    textClass: 'text-emerald-800',
    gradientClass: 'from-emerald-500 to-teal-600',
    icon: CheckCircle,
  },
  C: {
    label: 'Cランク',
    sublabel: '発展・高得点狙い',
    badgeText: 'C 発展',
    bgClass: 'bg-stone-100',
    borderClass: 'border-stone-300',
    textClass: 'text-stone-700',
    gradientClass: 'from-stone-600 to-zinc-700',
    icon: Award,
  },
};

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({
  difficulty = 'B',
  size = 'md',
  showLabel = true,
  className = '',
}) => {
  const config = DIFFICULTY_CONFIG[difficulty] || DIFFICULTY_CONFIG.B;
  const Icon = config.icon;

  if (size === 'sm') {
    return (
      <span
        className={`inline-flex items-center gap-1 font-bold text-[10px] px-1.5 py-0.5 rounded-md border ${config.bgClass} ${config.borderClass} ${config.textClass} ${className}`}
      >
        <Icon className="w-2.5 h-2.5" />
        <span>{showLabel ? config.badgeText : `${difficulty}`}</span>
      </span>
    );
  }

  if (size === 'lg') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 font-bold text-xs px-2.5 py-1 rounded-lg border ${config.bgClass} ${config.borderClass} ${config.textClass} shadow-xs ${className}`}
      >
        <Icon className="w-3.5 h-3.5" />
        <span>{config.label}</span>
        <span className="text-[10px] font-medium opacity-80 border-l border-current pl-1.5 ml-0.5">
          {config.sublabel}
        </span>
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1 font-bold text-[11px] px-2 py-0.5 rounded-md border ${config.bgClass} ${config.borderClass} ${config.textClass} ${className}`}
    >
      <Icon className="w-3 h-3" />
      <span>{showLabel ? config.badgeText : `${difficulty}ランク`}</span>
    </span>
  );
};
