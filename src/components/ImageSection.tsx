
import { cn } from '@/lib/utils';

interface ImageSectionProps {
  image: string;
  alt: string;
  position?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

const ImageSection = ({ 
  image, 
  alt, 
  position = 'left',
  children,
  className
}: ImageSectionProps) => {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center",
      className
    )}>
      <div className={cn(
        "order-2",
        position === 'left' ? 'md:order-2' : 'md:order-1'
      )}>
        {children}
      </div>
      
      <div className={cn(
        "order-1",
        position === 'left' ? 'md:order-1' : 'md:order-2'
      )}>
        <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
          <img 
            src={image} 
            alt={alt} 
            className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
