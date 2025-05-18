
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
        return 'bg-blue-500 hover:bg-blue-600 shadow-sm shadow-blue-200';
      case 'framework':
        return 'bg-purple-500 hover:bg-purple-600 shadow-sm shadow-purple-200';
      case 'database':
        return 'bg-green-500 hover:bg-green-600 shadow-sm shadow-green-200';
      case 'devops':
        return 'bg-orange-500 hover:bg-orange-600 shadow-sm shadow-orange-200';
      case 'design':
        return 'bg-pink-500 hover:bg-pink-600 shadow-sm shadow-pink-200';
      default:
        return 'bg-gray-500 hover:bg-gray-600 shadow-sm shadow-gray-200';
    }
  }
  
  // Otherwise try to infer category from skill name
  const skillLower = skill.toLowerCase();
  
  // Programming languages
  if (['javascript', 'python', 'java', 'c++', 'c#', 'typescript', 'php', 'ruby', 'swift'].includes(skillLower)) {
    return 'bg-blue-500 hover:bg-blue-600 shadow-sm shadow-blue-200';
  }
  
  // Frameworks and libraries
  if (['react', 'angular', 'vue', 'django', 'flask', 'express', 'spring', 'rails'].includes(skillLower)) {
    return 'bg-purple-500 hover:bg-purple-600 shadow-sm shadow-purple-200';
  }
  
  // Databases
  if (['sql', 'mysql', 'postgresql', 'mongodb', 'firebase', 'oracle', 'redis'].includes(skillLower)) {
    return 'bg-green-500 hover:bg-green-600 shadow-sm shadow-green-200';
  }
  
  // DevOps & Cloud
  if (['aws', 'azure', 'docker', 'kubernetes', 'devops', 'ci/cd', 'git'].includes(skillLower)) {
    return 'bg-orange-500 hover:bg-orange-600 shadow-sm shadow-orange-200';
  }
  
  // Design
  if (['ui', 'ux', 'figma', 'sketch', 'adobe', 'design', 'photoshop'].includes(skillLower)) {
    return 'bg-pink-500 hover:bg-pink-600 shadow-sm shadow-pink-200';
  }
  
  // Default
  return 'bg-gray-500 hover:bg-gray-600 shadow-sm shadow-gray-200';
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, category }) => {
  const badgeColor = getBadgeColor(skill, category);
  
  return (
    <Badge 
      className={cn(
        'px-3 py-1.5 text-white font-medium rounded-full m-1 transition-all duration-200 hover:scale-105',
        badgeColor
      )}
    >
      {skill}
    </Badge>
  );
};

export default SkillTag;
