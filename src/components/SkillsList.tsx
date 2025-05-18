
import React from 'react';
import SkillTag from './SkillTag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TagIcon } from 'lucide-react';

interface SkillsListProps {
  skills: string[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  // Group skills by category based on our detection logic
  const groupedSkills: Record<string, string[]> = {
    Programming: [],
    Framework: [],
    Database: [],
    DevOps: [],
    Design: [],
    Other: []
  };

  skills.forEach(skill => {
    const skillLower = skill.toLowerCase();
    
    if (['javascript', 'python', 'java', 'c++', 'c#', 'typescript', 'php', 'ruby', 'swift'].includes(skillLower)) {
      groupedSkills.Programming.push(skill);
    } else if (['react', 'angular', 'vue', 'django', 'flask', 'express', 'spring', 'rails'].includes(skillLower)) {
      groupedSkills.Framework.push(skill);
    } else if (['sql', 'mysql', 'postgresql', 'mongodb', 'firebase', 'oracle', 'redis'].includes(skillLower)) {
      groupedSkills.Database.push(skill);
    } else if (['aws', 'azure', 'docker', 'kubernetes', 'devops', 'ci/cd', 'git'].includes(skillLower)) {
      groupedSkills.DevOps.push(skill);
    } else if (['ui', 'ux', 'figma', 'sketch', 'adobe', 'design', 'photoshop'].includes(skillLower)) {
      groupedSkills.Design.push(skill);
    } else {
      groupedSkills.Other.push(skill);
    }
  });
  
  if (skills.length === 0) {
    return (
      <Card className="mt-6 border-dashed border-2 bg-gray-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-center text-gray-500 flex items-center justify-center">
            <TagIcon className="w-5 h-5 mr-2 opacity-50" />
            No skills detected
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 pb-6">
          <p className="text-center text-gray-400 text-sm">
            Upload a resume to extract skills automatically
          </p>
        </CardContent>
      </Card>
    );
  }
  
  // Filter out empty categories
  const categories = Object.keys(groupedSkills).filter(
    category => groupedSkills[category].length > 0
  );

  return (
    <Card className="mt-6 shadow-md border-gray-200">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-gray-50 border-b pb-4">
        <CardTitle className="flex items-center">
          <TagIcon className="w-5 h-5 mr-2 text-blue-600" />
          Detected Skills ({skills.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {categories.length > 0 ? (
          <div className="space-y-6">
            {categories.map(category => (
              <div key={category} className="skill-category">
                <h3 className="text-sm font-medium text-gray-500 mb-2">{category}</h3>
                <div className="flex flex-wrap">
                  {groupedSkills[category].map((skill, index) => (
                    <SkillTag key={index} skill={skill} category={category} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <SkillTag key={index} skill={skill} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SkillsList;
