import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set timeout to match animation duration (3 seconds total)
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (animationComplete) {
    return null;
  }

  return (
    <div className="loading-screen">
      <div className="logo-container">
        <span className="slashes">//</span>
        <span className="mozzzo">mozzzo</span>
      </div>
    </div>
  );
};

export default LoadingScreen;