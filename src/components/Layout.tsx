import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <Navbar />
      <main className={cn("flex-grow", !isHomePage && "pt-20 sm:pt-24 md:pt-28 lg:pt-32")}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
