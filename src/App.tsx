import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Technology from "./pages/Technology";
import Sectors from "./pages/Sectors";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import technology pages
import BuiltEnvironment from "./pages/technologies/BuiltEnvironment";
import ColdChain from "./pages/technologies/ColdChain";
import AgriTech from "./pages/technologies/AgriTech";
import ThermalTaps from "./pages/technologies/ThermalTaps";
import Aviation from "./pages/technologies/Aviation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen bg-white text-gray-900">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Technology sub-pages */}
            <Route path="/technologies/built-environment" element={<BuiltEnvironment />} />
            <Route path="/technologies/cold-chain" element={<ColdChain />} />
            <Route path="/technologies/agri-tech" element={<AgriTech />} />
            <Route path="/technologies/thermal-taps" element={<ThermalTaps />} />
            <Route path="/technologies/aviation" element={<Aviation />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;