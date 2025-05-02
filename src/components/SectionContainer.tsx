
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer = ({ children, className, id }: SectionContainerProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-10 xs:py-12 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 md:px-6",
        className
      )}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
