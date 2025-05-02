import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface TeamMemberModalProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  children?: React.ReactNode;
}

const TeamMemberModal = ({ name, title, image, bio, children }: TeamMemberModalProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  const teamCard = (
    <div className="glass-card overflow-hidden group hover:shadow-xl animate-fade-in cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
            {name}
          </h3>
          <p className="text-white/80">
            {title}
          </p>
        </div>
      </div>
      {isMobile && (
        <div className="p-4 flex justify-center">
          <Button variant="outline" className="hover:bg-botanicRed hover:text-white transition-colors duration-300">
            View Profile
          </Button>
        </div>
      )}
    </div>
  );

  // If not mobile, just render the card without the modal functionality
  if (!isMobile) {
    return teamCard;
  }

  // If mobile, wrap the card in a dialog for the modal functionality
  return (
    <Dialog>
      <DialogTrigger asChild>
        {teamCard}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 grid grid-cols-1 gap-6">
          <div>
            <img 
              src={image}
              alt={name}
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
          </div>
          <div>
            <div className="prose prose-sm max-w-none">
              {bio.split('\n\n').map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
              {children}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberModal;