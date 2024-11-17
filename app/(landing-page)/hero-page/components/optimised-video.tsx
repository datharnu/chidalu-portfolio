"use client";
import React, { useEffect, useRef, useState } from "react";

interface OptimizedVideoProps {
  src: string;
  posterImage?: string;
  className?: string;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  posterImage,
  className = "w-full h-full object-cover",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) {
              observer.unobserve(videoRef.current);
            }
          }
        });
      },
      options
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      // Start loading the video when it becomes visible
      videoRef.current.load();
      videoRef.current.play().catch((error: Error) => {
        console.log("Auto-play failed:", error);
      });
    }
  }, [isVisible]);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        autoPlay={isVisible}
        loop
        muted
        playsInline
        poster={posterImage}
        className={className}
      >
        <source src={isVisible ? src : ""} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default OptimizedVideo;
