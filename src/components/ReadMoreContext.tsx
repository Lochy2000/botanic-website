import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ReadMoreInlineProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export const ReadMoreInline: React.FC<ReadMoreInlineProps> = ({ 
  text, 
  maxLength = 150,
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (text.length <= maxLength) {
    return <p className={className}>{text}</p>;
  }
  
  return (
    <div className={className}>
      <p>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      <Button 
        variant="link" 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="p-0 h-auto mt-2 text-botanicRed hover:text-botanicRed/80 font-medium"
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </Button>
    </div>
  );
};

interface ReadMoreModalProps {
  title: string;
  summary: string;
  fullContent: string | React.ReactNode;
  maxLength?: number;
  buttonText?: string;
  className?: string;
}

export const ReadMoreModal: React.FC<ReadMoreModalProps> = ({
  title,
  summary,
  fullContent,
  maxLength = 150,
  buttonText = "Read More",
  className = ""
}) => {
  return (
    <div className={className}>
      <p className="mb-2">
        {summary.length > maxLength ? `${summary.substring(0, maxLength)}...` : summary}
      </p>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="link" 
            className="p-0 h-auto text-botanicRed hover:text-botanicRed/80 font-medium"
          >
            {buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 prose prose-sm sm:prose max-w-none">
            {typeof fullContent === 'string' ? (
              fullContent.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            ) : (
              fullContent
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};