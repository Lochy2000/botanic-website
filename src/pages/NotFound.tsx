import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-black">
        <div className="text-center max-w-4xl px-4">
          {/* Animated 404 SVG */}
          <svg viewBox="0 0 960 300" className="w-full h-auto max-h-[40vh]">
            <defs>
              <style>
                {`
                  .notfound-text {
                    font-family: 'Arial Black', 'Arial Bold', sans-serif;
                    font-size: 10.5em;
                    font-weight: 900;
                    fill: none;
                    stroke-dasharray: 8% 29%;
                    stroke-width: 5px;
                    stroke-dashoffset: 1%;
                    animation: stroke-offset 5.5s infinite linear;
                  }
                  .notfound-text:nth-child(1) {
                    stroke: #1c234d;
                    animation-delay: -1s;
                  }
                  .notfound-text:nth-child(2) {
                    stroke: #315b2c;
                    animation-delay: -2s;
                  }
                  .notfound-text:nth-child(3) {
                    stroke: #2f8f7f;
                    animation-delay: -3s;
                  }
                  .notfound-text:nth-child(4) {
                    stroke: #2f8f7f;
                    animation-delay: -4s;
                  }
                  .notfound-text:nth-child(5) {
                    stroke: #dc2626;
                    animation-delay: -5s;
                  }
                  @keyframes stroke-offset {
                    100% {
                      stroke-dashoffset: -35%;
                    }
                  }
                `}
              </style>
            </defs>
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="50%" dy=".35em">404</text>
            </symbol>
            <g>
              <use xlinkHref="#s-text" className="notfound-text" />
              <use xlinkHref="#s-text" className="notfound-text" />
              <use xlinkHref="#s-text" className="notfound-text" />
              <use xlinkHref="#s-text" className="notfound-text" />
              <use xlinkHref="#s-text" className="notfound-text" />
            </g>
          </svg>

          <h1 className="text-2xl md:text-3xl font-bold text-white/60 mb-4 animate-fade-in">
            Page Not Found
          </h1>
          <p className="text-lg text-white/50 mb-8 animate-fade-in">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-botanicBlue/60 text-botanicBlue/80 rounded hover:bg-botanicBlue/10 transition-colors animate-fade-in"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
