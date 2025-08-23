
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const RouteProgress: React.FC = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Start progress when route changes
    setVisible(true);
    setProgress(10);

    // Simulate progressive loading
    timerRef.current = window.setInterval(() => {
      setProgress((p) => {
        if (p < 90) return p + Math.random() * 10;
        return p;
      });
    }, 200);

    // Complete after short delay
    const complete = window.setTimeout(() => {
      setProgress(100);
      window.setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 250);
    }, 600);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      window.clearTimeout(complete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        className={cn(
          'h-full bg-accent transition-all duration-200 ease-out',
        )}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default RouteProgress;
