import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container-responsive">
          <div className="max-w-2xl mx-auto text-center space-y-8 py-16">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient">404</h1>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Page Not Found</h2>
              <p className="text-lg text-muted-foreground">
                Oops! The page you're looking for doesn't exist. 
                It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="btn-hero">
                  Return to Home
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
