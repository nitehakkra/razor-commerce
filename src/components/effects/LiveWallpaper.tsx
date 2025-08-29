import React, { useEffect, useState } from 'react';

const LiveWallpaper: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100; // Range: 0 to 100
      const y = (e.clientY / window.innerHeight) * 100; // Range: 0 to 100
      setPosition({ x, y });
    };
    
    // Device orientation handler
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        const x = (e.gamma + 90) * 5; // Scale to 0-100
        const y = (e.beta + 90) * 5; // Scale to 0-100
        setPosition({ x, y });
      }
    };
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    if (typeof DeviceOrientationEvent !== 'undefined' && 
        typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      (DeviceOrientationEvent as any).requestPermission()
        .then((permissionState: string) => {
          if (permissionState === 'granted') {
            window.addEventListener('deviceorientation', handleDeviceOrientation);
          }
        })
        .catch(console.error);
    } else {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);
  
  // Create a dynamic gradient that moves with the mouse/device
  const gradientStyle = {
    backgroundImage: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(100, 100, 255, 0.2), rgba(0, 0, 100, 0.2))`,
  };
  
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={gradientStyle}
    />
  );
};

export default LiveWallpaper;
