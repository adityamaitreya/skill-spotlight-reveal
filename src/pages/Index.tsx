
import React, { useState } from 'react';
import ResumeUploader from '@/components/ResumeUploader';
import SkillsList from '@/components/SkillsList';
import { extractText } from '@/lib/pdfParser';
import { extractSkills } from '@/lib/skillsExtractor';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [processing, setProcessing] = useState(false);
  const [extractedSkills, setExtractedSkills] = useState<string[]>([]);
  const [hasProcessedFile, setHasProcessedFile] = useState(false);
  const { toast } = useToast();

  const handleFileProcessed = async (file: File) => {
    setProcessing(true);
    
    try {
      // Extract text from the file
      const text = await extractText(file);
      
      // Extract skills from the text
      const skills = extractSkills(text);
      
      setExtractedSkills(skills);
      setHasProcessedFile(true);
      
      toast({
        title: "Success!",
        description: `Detected ${skills.length} skills from your resume.`,
      });
    } catch (error) {
      console.error('Error processing resume:', error);
      toast({
        title: "Error processing file",
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setProcessing(false);
    }
  };

  const handleReset = () => {
    setExtractedSkills([]);
    setHasProcessedFile(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-brand-700 to-brand-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Resume Skills Extractor</h1>
          <p className="text-xl max-w-2xl">
            Upload your resume and instantly discover the key skills that make you stand out.
            Our tool helps you identify professional competencies from your CV.
          </p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {hasProcessedFile ? (
            <div>
              <SkillsList skills={extractedSkills} />
              
              <div className="mt-6 flex justify-center">
                <Button onClick={handleReset} variant="outline" className="mr-4">
                  Try Another Resume
                </Button>
                
                {extractedSkills.length > 0 && (
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(extractedSkills.join(', '));
                      toast({
                        title: "Skills copied!",
                        description: "All skills have been copied to clipboard"
                      });
                    }}
                  >
                    Copy All Skills
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <>
              <Card className="mb-6 bg-blue-50 border-blue-100">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-2">How it works</h2>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Upload your resume (PDF or text file)</li>
                    <li>Our algorithm extracts the text content</li>
                    <li>Key skills are automatically identified</li>
                    <li>Review and copy your professional skills</li>
                  </ol>
                </CardContent>
              </Card>
              
              <ResumeUploader 
                onFileProcessed={handleFileProcessed}
                isProcessing={processing}
              />
            </>
          )}
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Resume Skills Extractor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
