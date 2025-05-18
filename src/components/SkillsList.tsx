
import React from 'react';
import SkillTag from './SkillTag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillsListProps {
  skills: string[];
}

const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  if (skills.length === 0) {
    return (
      <Card className="mt-6 border-dashed">
        <CardHeader>
          <CardTitle className="text-center text-gray-500">No skills detected</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Detected Skills ({skills.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap">
          {skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsList;
