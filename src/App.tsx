import type { RouteRecord } from 'vite-react-ssg';
import RootLayout from './components/RootLayout';
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

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: 'technology', element: <Technology /> },
      { path: 'sectors', element: <Sectors /> },
      { path: 'about', element: <About /> },
      { path: 'news', element: <News /> },
      { path: 'contact', element: <Contact /> },

      // Technology sub-pages
      { path: 'technologies/built-environment', element: <BuiltEnvironment /> },
      { path: 'technologies/cold-chain', element: <ColdChain /> },
      { path: 'technologies/agri-tech', element: <AgriTech /> },
      { path: 'technologies/thermal-taps', element: <ThermalTaps /> },
      { path: 'technologies/aviation', element: <Aviation /> },

      // Catch-all 404 route
      { path: '*', element: <NotFound /> },
    ],
  },
];
