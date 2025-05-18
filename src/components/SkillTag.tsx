
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SkillTagProps {
  skill: string;
  category?: string;
}

// Function to determine badge color based on skill category or skill name
function getBadgeColor(skill: string, category?: string): string {
  // If a category is provided, use that for coloring
  if (category) {
    switch (category.toLowerCase()) {
      case 'programming':
        return 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm';
      case 'framework':
        return 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm';
      case 'database':
        return 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm';
      case 'devops':
        return 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm';
      case 'design':
        return 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-sm';
      default:
        return 'bg-slate-600 hover:bg-slate-700 text-white shadow-sm';
    }
  }
  
  // Otherwise try to infer category from skill name
  const skillLower = skill.toLowerCase();
  
  // Programming languages
  if (['javascript', 'python', 'java', 'c++', 'c#', 'typescript', 'php', 'ruby', 'swift'].includes(skillLower)) {
    return 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm';
  }
  
  // Frameworks and libraries
  if (['react', 'angular', 'vue', 'django', 'flask', 'express', 'spring', 'rails'].includes(skillLower)) {
    return 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm';
  }
  
  // Databases
  if (['sql', 'mysql', 'postgresql', 'mongodb', 'firebase', 'oracle', 'redis'].includes(skillLower)) {
    return 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm';
  }
  
  // DevOps & Cloud
  if (['aws', 'azure', 'docker', 'kubernetes', 'devops', 'ci/cd', 'git'].includes(skillLower)) {
    return 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm';
  }
  
  // Design
  if (['ui', 'ux', 'figma', 'sketch', 'adobe', 'design', 'photoshop'].includes(skillLower)) {
    return 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-sm';
  }
  
  // Default
  return 'bg-slate-600 hover:bg-slate-700 text-white shadow-sm';
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, category }) => {
  const badgeColor = getBadgeColor(skill, category);
  
  return (
    <Badge 
      className={cn(
        'px-3 py-1.5 font-medium rounded-full m-1 transition-all duration-200 hover:scale-105',
        badgeColor
      )}
    >
      {skill}
    </Badge>
  );
};

export default SkillTag;
