
// Common skills list for detection
const SKILLS_LIST = [
  // Programming Languages
  "JavaScript", "Python", "Java", "C++", "C#", "PHP", "Ruby", "Go", "Swift", "Kotlin", "TypeScript",
  "Rust", "Scala", "Perl", "Shell", "SQL", "R", "MATLAB", "Dart", "Objective-C", "HTML", "CSS", 
  
  // Frameworks & Libraries
  "React", "Angular", "Vue", "Next.js", "Django", "Flask", "Spring", "Express", "Laravel", "Ruby on Rails",
  "ASP.NET", "jQuery", "Bootstrap", "Tailwind CSS", "Node.js", "Pandas", "NumPy", "TensorFlow", "PyTorch",
  "Scikit-learn", "Flutter", "React Native", "Electron", "Svelte", ".NET", "Redux", "GraphQL",
  
  // Databases
  "MongoDB", "PostgreSQL", "MySQL", "SQLite", "Oracle", "Redis", "Cassandra", "DynamoDB", "Firebase",
  "MariaDB", "Neo4j", "CouchDB", "Elasticsearch", "SQL Server", "Supabase",
  
  // DevOps & Cloud
  "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "Git", "GitHub", "GitLab", "Bitbucket",
  "Terraform", "Ansible", "CI/CD", "Linux", "Bash", "Shell Scripting", "Nginx", "Apache", "Serverless",
  "Heroku", "Vercel", "Netlify", "CloudFlare", "DevOps",
  
  // Design & UI/UX
  "Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "InDesign", "UI Design", "UX Design",
  "Wireframing", "Prototyping", "User Research", "Responsive Design", "User Testing", "Interaction Design",
  
  // Management & Methodology
  "Agile", "Scrum", "Kanban", "JIRA", "Trello", "Asana", "Project Management", "Team Leadership",
  "Product Management", "Waterfall", "Lean", "Six Sigma", "PMP", "PRINCE2", "Technical Writing",
  
  // Soft Skills
  "Communication", "Teamwork", "Problem Solving", "Critical Thinking", "Time Management",
  "Creativity", "Leadership", "Adaptability", "Collaboration", "Conflict Resolution", "Emotional Intelligence",
  
  // Data & Analytics
  "Data Analysis", "Big Data", "Machine Learning", "Data Science", "Data Visualization", "Business Intelligence",
  "Power BI", "Tableau", "Data Mining", "Statistics", "A/B Testing", "Google Analytics", "Excel", "Data Modeling",
  
  // Marketing & Business
  "SEO", "SEM", "Social Media Marketing", "Content Marketing", "Email Marketing", "Google Ads", "Facebook Ads",
  "Marketing Analytics", "CRM", "Salesforce", "HubSpot", "Customer Service", "Business Analysis", "Market Research",
  
  // Mobile
  "iOS Development", "Android Development", "Mobile App Development", "Swift", "Kotlin", "Flutter",
  "React Native", "Xamarin", "App Store Optimization", "Mobile UI Design", "Mobile UX",
  
  // Testing & QA
  "Unit Testing", "Integration Testing", "Test Automation", "Selenium", "Jest", "Cypress", "JUnit",
  "TestNG", "QA", "Quality Assurance", "Testing", "Debugging", "TDD", "BDD"
];

export function extractSkills(text: string): string[] {
  const normalizedText = text.toLowerCase();
  const skills = new Set<string>();
  
  // Check for each skill in the text
  SKILLS_LIST.forEach(skill => {
    // Create regex to find whole word matches (case insensitive)
    const regex = new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').toLowerCase()}\\b`, 'i');
    if (regex.test(normalizedText)) {
      // Add the skill with original casing from our list
      skills.add(skill);
    }
  });
  
  return Array.from(skills).sort();
}
