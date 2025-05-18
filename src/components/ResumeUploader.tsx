
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface ResumeUploaderProps {
  onFileProcessed: (file: File) => void;
  isProcessing: boolean;
}

const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onFileProcessed, isProcessing }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const validateFile = (file: File): boolean => {
    if (!['application/pdf', 'text/plain'].includes(file.type)) {
      toast({
        title: "Unsupported file format",
        description: "Please upload a PDF or text file",
        variant: "destructive"
      });
      return false;
    }
    
    if (file.size > 5 * 1024 * 1024) { // 5MB
      toast({
        title: "File too large",
        description: "File size should be less than 5MB",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      const file = files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
        onFileProcessed(file);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
        onFileProcessed(file);
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className={`p-6 border-2 border-dashed transition-colors ${
      isDragging ? 'border-primary bg-blue-50' : 'border-gray-300'
    }`}>
      <div
        className="flex flex-col items-center justify-center py-8"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center mb-4">
          <svg
            className="w-12 h-12 text-gray-400 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
          
          {selectedFile ? (
            <p className="text-sm text-gray-600">
              Selected file: <span className="font-medium">{selectedFile.name}</span>
            </p>
          ) : (
            <>
              <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Upload your resume</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PDF or TXT (MAX. 5MB)</p>
            </>
          )}
        </div>

        {isProcessing ? (
          <div className="w-full max-w-xs">
            <Progress value={33} className="h-2" />
            <p className="mt-2 text-sm text-center text-gray-500">Processing file...</p>
          </div>
        ) : (
          <Button 
            variant="outline" 
            onClick={handleButtonClick}
            disabled={isProcessing}
            className="relative"
          >
            Upload Resume
          </Button>
        )}

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".pdf,.txt"
          onChange={handleFileSelect}
        />
      </div>
    </Card>
  );
};

export default ResumeUploader;
