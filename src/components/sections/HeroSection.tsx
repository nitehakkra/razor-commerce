import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Star, Shield, Zap, Play, Sparkles, Code2, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoadingButton } from '@/components/ui/loading';
import { Link, useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: (e.clientX - rect.left) / rect.width, 
          y: (e.clientY - rect.top) / rect.height 
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{ x: number; y: number; size: number; speed: number; opacity: number }> = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.y -= particle.speed;
        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleNavigation = (path: string) => {
    setLoading(path);
    setTimeout(() => {
      navigate(path);
      setLoading(null);
    }, 300);
  };

  return (
    <section 
      ref={heroRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(147, 51, 234, 0.05) 25%, 
            transparent 50%),
          linear-gradient(135deg, 
            rgba(15, 23, 42, 0.95) 0%, 
            rgba(30, 41, 59, 0.9) 25%, 
            rgba(51, 65, 85, 0.85) 50%, 
            rgba(15, 23, 42, 0.9) 75%, 
            rgba(15, 23, 42, 0.95) 100%)
        `
      }}
    >
      {/* Animated Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2))',
            left: `${20 + mousePosition.x * 10}%`,
            top: `${15 + mousePosition.y * 10}%`,
            transform: `scale(${1 + mousePosition.x * 0.2})`,
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: 'linear-gradient(-45deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.1))',
            right: `${15 + mousePosition.y * 15}%`,
            bottom: `${20 + mousePosition.x * 8}%`,
            transform: `scale(${1 + mousePosition.y * 0.3}) rotate(${mousePosition.x * 10}deg)`,
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full blur-2xl transition-all duration-700 ease-out"
          style={{
            background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.15), rgba(59, 130, 246, 0.1))',
            left: `${60 + mousePosition.y * 20}%`,
            top: `${50 + mousePosition.x * 15}%`,
            transform: `rotate(${mousePosition.y * 20}deg)`,
          }}
        />
      </div>
      
      {/* Geometric Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/30 rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-white/25 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container-responsive relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className={`space-y-10 text-center lg:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white/90 rounded-full px-5 py-2.5 border border-white/20 shadow-2xl">
              <Sparkles className="h-4 w-4 text-blue-400 animate-pulse" />
              <span className="text-sm font-medium">Premium Design Templates</span>
            </div>

            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-pulse">Crafting Digital</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-300% animate-gradient">Excellence</span>
                <span className="block text-white/80">Since 2020</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                Transform your vision into stunning reality with our premium collection of 
                <span className="font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> modern, responsive web design templates</span>. 
                Built for performance, designed for conversion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <LoadingButton
                loading={loading === '/products'}
                onClick={() => handleNavigation('/products')}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 border border-white/20 backdrop-blur-sm bg-size-200 animate-gradient"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600"></div>
                <span className="relative flex items-center">
                  <Code2 className="mr-3 h-5 w-5" />
                  Explore Templates
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </LoadingButton>
              
              <Button
                variant="outline"
                className="group relative overflow-hidden bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:border-white/30 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-white/10 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600"></div>
                <span className="relative flex items-center">
                  <Play className="mr-3 h-5 w-5" />
                  Watch Demo
                </span>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10">
              <div className="group flex items-center space-x-4 justify-center lg:justify-start transition-all duration-300 hover:scale-105">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-xl group-hover:bg-white/20 transition-all duration-300">
                  <Shield className="h-6 w-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-green-300 transition-colors duration-300">Bank-Level Security</p>
                  <p className="text-white/70 text-sm">SSL & PCI Compliant</p>
                </div>
              </div>
              <div className="group flex items-center space-x-4 justify-center lg:justify-start transition-all duration-300 hover:scale-105">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-xl group-hover:bg-white/20 transition-all duration-300">
                  <Zap className="h-6 w-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">Lightning Fast</p>
                  <p className="text-white/70 text-sm">Instant downloads</p>
                </div>
              </div>
              <div className="group flex items-center space-x-4 justify-center lg:justify-start transition-all duration-300 hover:scale-105">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 shadow-xl group-hover:bg-white/20 transition-all duration-300">
                  <Palette className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">Premium Quality</p>
                  <p className="text-white/70 text-sm">5-star rated designs</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative group">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl w-full h-96 md:h-[550px] rounded-2xl shadow-2xl border border-white/20 flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-all duration-500">
                {/* Interactive 3D Card Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(${135 + mousePosition.x * 10}deg, 
                      rgba(59, 130, 246, 0.1) 0%, 
                      rgba(147, 51, 234, 0.05) 50%, 
                      rgba(236, 72, 153, 0.1) 100%)`,
                    transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`,
                  }}
                />
                
                <div className="text-center p-12 relative z-10">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg border border-white/30 rounded-2xl w-72 h-72 mx-auto flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                          <Code2 className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-white text-lg font-medium mb-2">Live Demo Preview</div>
                        <div className="flex justify-center space-x-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 rounded-2xl group-hover:via-white/20 transition-all duration-300" />
                  </div>
                  <p className="mt-6 text-white/80 font-medium">Premium Product Showcase</p>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-pink-500/30 to-blue-500/20 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3s' }} />
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-green-400/20 rounded-full blur-md animate-ping" />
              <div className="absolute bottom-1/4 -right-8 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Stats Section */}
      <div className="mt-20 pt-16 border-t border-white/20">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">500+</div>
              <div className="text-white/70 font-medium group-hover:text-white transition-colors duration-300">Premium Templates</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">50k+</div>
              <div className="text-white/70 font-medium group-hover:text-white transition-colors duration-300">Happy Customers</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">4.9</div>
              <div className="text-white/70 font-medium group-hover:text-white transition-colors duration-300">Average Rating</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">24/7</div>
              <div className="text-white/70 font-medium group-hover:text-white transition-colors duration-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
