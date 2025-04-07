
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  chip?: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  chip, 
  className,
  alignment = 'center' 
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  
  return (
    <div className={cn(
      "max-w-3xl mb-12 md:mb-16",
      alignmentClasses[alignment],
      className
    )}>
      {chip && (
        <div className="title-chip animate-fade-in">
          {chip}
        </div>
      )}
      <h2 className="section-title mb-4 animate-fade-in">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-foreground/70 animate-fade-in">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
