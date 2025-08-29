import React, { ReactNode, useEffect, useState } from 'react';

interface ParallaxProviderProps {
  children: ReactNode;
}

const ParallaxProvider: React.FC<ParallaxProviderProps> = ({ children }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10; // Range: -5 to 5
      const y = (e.clientY / window.innerHeight - 0.5) * 10; // Range: -5 to 5
      setRotation({ x: -y, y: x }); // Invert y for natural movement
    };
    
    // Device orientation handler
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        const y = e.gamma * 0.2; // Scale down for subtle effect
        const x = (e.beta - 90) * 0.1; // Adjust beta range
        setRotation({ x, y });
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
  
  // Apply the rotation as a 3D transform
  const transformStyle = {
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transition: 'transform 0.1s ease-out',
  };
  
  return (
    <div style={transformStyle}>
      {children}
    </div>
  );
};

export default ParallaxProvider;
