import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-9xl font-bold text-botanicRed mb-4 animate-fade-in">404</h1>
          <p className="text-2xl text-foreground/80 mb-8 animate-fade-in">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Link to="/" className="inline-flex items-center btn-primary animate-fade-in">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
