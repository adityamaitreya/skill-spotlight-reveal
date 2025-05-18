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
        return 'bg-blue-500 hover:bg-blue-600';
      case 'framework':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'database':
        return 'bg-green-500 hover:bg-green-600';
      case 'devops':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'design':
        return 'bg-pink-500 hover:bg-pink-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  }
  
  // Otherwise try to infer category from skill name
  const skillLower = skill.toLowerCase();
  
  // Programming languages
  if (['javascript', 'python', 'java', 'c++', 'c#', 'typescript', 'php', 'ruby', 'swift'].includes(skillLower)) {
    return 'bg-blue-500 hover:bg-blue-600';
  }
  
  // Frameworks and libraries
  if (['react', 'angular', 'vue', 'django', 'flask', 'express', 'spring', 'rails'].includes(skillLower)) {
    return 'bg-purple-500 hover:bg-purple-600';
  }
  
  // Databases
  if (['sql', 'mysql', 'postgresql', 'mongodb', 'firebase', 'oracle', 'redis'].includes(skillLower)) {
    return 'bg-green-500 hover:bg-green-600';
  }
  
  // DevOps & Cloud
  if (['aws', 'azure', 'docker', 'kubernetes', 'devops', 'ci/cd', 'git'].includes(skillLower)) {
    return 'bg-orange-500 hover:bg-orange-600';
  }
  
  // Design
  if (['ui', 'ux', 'figma', 'sketch', 'adobe', 'design', 'photoshop'].includes(skillLower)) {
    return 'bg-pink-500 hover:bg-pink-600';
  }
  
  // Default
  return 'bg-gray-500 hover:bg-gray-600';
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, category }) => {
  const badgeColor = getBadgeColor(skill, category);
  
  return (
    <Badge 
      className={cn(
        'px-3 py-1 text-white font-medium rounded-full m-1',
        badgeColor
      )}
    >
      {skill}
    </Badge>
  );
};

export default SkillTag;
