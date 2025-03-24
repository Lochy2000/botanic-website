
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TechnologyCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
}

const TechnologyCard = ({ 
  title, 
  description, 
  image, 
  link,
  className 
}: TechnologyCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden group hover:shadow-xl",
        className
      )}
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-foreground/70 mb-6">
          {description}
        </p>
        <Link 
          to={link}
          className="inline-flex items-center text-botanicBlue font-medium hover:underline"
        >
          Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default TechnologyCard;
