import { useEffect, useRef, useState, forwardRef, useMemo } from "react";
import { gsap } from "gsap";

const LazyVideo = forwardRef(({ src, type, ...props }, ref) => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const memoizedSource = useMemo(() => ({ src, type }), [src, type]);

  // Extract YouTube video ID from shortened URL
  const extractYouTubeId = (url) => {
    const match = url.match(/(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/]+\/[^\?]+|(?:v|e(?:mbed)?)\/|(?:.*[?&]v=))|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  const videoId = extractYouTubeId(src); // Extracted YouTube video ID

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
    if (ref) {
      ref.current = videoRef.current;
    }
  }, [ref]);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      gsap.from(videoRef.current, {
        opacity: 0,
        scale: 0,
        duration: 1.4,
        ease: "power2.inOut",
      });
    }
  }, [isVisible]);

  return (
    <div ref={videoRef} {...props}>
      {isVisible && videoId ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
});

export default LazyVideo;
