import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const handleMouseMove = (e: MouseEvent) => {
      const layers = scene.querySelectorAll<HTMLElement>("[data-depth]");
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth || "0");
        const moveX = (mouseX * depth) / 10;
        const moveY = (mouseY * depth) / 10;
        layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Layout>
      <div className="notfound-wrapper">
        <div className="notfound-container">
          <div ref={sceneRef} className="notfound-scene">
            <div className="notfound-circle" data-depth="1.2"></div>

            <div className="notfound-layer notfound-one" data-depth="0.9">
              <div className="notfound-content">
                <span className="notfound-piece"></span>
                <span className="notfound-piece"></span>
                <span className="notfound-piece"></span>
              </div>
            </div>

            <div className="notfound-layer notfound-two" data-depth="0.6">
              <div className="notfound-content">
                <span className="notfound-piece"></span>
                <span className="notfound-piece"></span>
                <span className="notfound-piece"></span>
              </div>
            </div>

            <div className="notfound-layer notfound-three" data-depth="0.4">
              <div className="notfound-content">
                <span className="notfound-piece"></span>
                <span className="notfound-piece"></span>
                <span className="notfound-piece"></span>
              </div>
            </div>

            <p className="notfound-p404 notfound-p404-front" data-depth="0.5">404</p>
            <p className="notfound-p404 notfound-p404-back" data-depth="0.1">404</p>
          </div>

          <div className="notfound-text">
            <article>
              <p className="text-white text-base sm:text-lg mb-6 sm:mb-10 drop-shadow-lg">
                Uh oh! Looks like you got lost.<br />Go back to the homepage if you dare!
              </p>
              <Link
                to="/"
                className="notfound-btn"
              >
                I dare!
              </Link>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
