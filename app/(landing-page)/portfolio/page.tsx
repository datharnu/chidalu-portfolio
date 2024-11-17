// "use client";
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { images } from "@/app/utils/Photoshoots";

// const PortfolioPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Array of image pairs - replace with your actual images
// //   const images = [
// //     {
// //       left: {
// //         src: "/image1.jpg",
// //         alt: "Portrait photo 1",
// //       },
// //       right: {
// //         src: "/image2.jpg",
// //         alt: "Fashion photo 1",
// //       },
// //     },
// //     {
// //       left: {
// //         src: "/image3.jpg",
// //         alt: "Portrait photo 2",
// //       },
// //       right: {
// //         src: "/image4.jpg",
// //         alt: "Fashion photo 2",
// //       },
// //     },
// //     // Add more pairs following the same pattern...
// //     {
// //       left: {
// //         src: "/image29.jpg",
// //         alt: "Portrait photo 15",
// //       },
// //       right: {
// //         src: "/image30.jpg",
// //         alt: "Fashion photo 15",
// //       },
// //     },
// //   ];

// const images = images

//   const handlePrevious = () => {
//     if (!isAnimating && currentIndex > 0) {
//       setIsAnimating(true);
//       setCurrentIndex((prev) => prev - 1);
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   const handleNext = () => {
//     if (!isAnimating && currentIndex < images.length - 1) {
//       setIsAnimating(true);
//       setCurrentIndex((prev) => prev + 1);
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   // Keyboard navigation
//   React.useEffect(() => {
//     const handleKeyDown = (e: { key: string }) => {
//       if (e.key === "ArrowLeft") handlePrevious();
//       if (e.key === "ArrowRight") handleNext();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [currentIndex, isAnimating]); // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <div className="relative w-full max-w-6xl mx-auto p-4">
//       {/* Current pair number indicator */}
//       <div className="text-center mb-4 text-lg font-medium">
//         Pair {currentIndex + 1} of {images.length}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {/* Left Image */}
//         <div className="relative overflow-hidden aspect-[3/4] group">
//           <img
//             src={images[currentIndex].left.src}
//             alt={images[currentIndex].left.alt}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//           />
//           {/* Optional overlay with image number */}
//           <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded">
//             {currentIndex * 2 + 1} / {images.length * 2}
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="relative overflow-hidden aspect-[3/4] group">
//           <img
//             src={images[currentIndex].right.src}
//             alt={images[currentIndex].right.alt}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//           />
//           {/* Optional overlay with image number */}
//           <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded">
//             {currentIndex * 2 + 2} / {images.length * 2}
//           </div>
//         </div>
//       </div>

//       {/* Navigation arrows */}
//       <button
//         onClick={handlePrevious}
//         className={`absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors ${
//           currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//         disabled={currentIndex === 0}
//         aria-label="Previous pair"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>

//       <button
//         onClick={handleNext}
//         className={`absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors ${
//           currentIndex === images.length - 1
//             ? "opacity-50 cursor-not-allowed"
//             : ""
//         }`}
//         disabled={currentIndex === images.length - 1}
//         aria-label="Next pair"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Navigation dots */}
//       <div className="flex justify-center gap-2 mt-4">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               if (!isAnimating) {
//                 setIsAnimating(true);
//                 setCurrentIndex(index);
//                 setTimeout(() => setIsAnimating(false), 500);
//               }
//             }}
//             className={`w-2 h-2 rounded-full transition-colors ${
//               currentIndex === index ? "bg-black" : "bg-gray-300"
//             }`}
//             aria-label={`Go to pair ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PortfolioPage;

"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/app/utils/Photoshoots";
// Adjust the import path based on your file structure

interface PortfolioPageProps {
  initialIndex?: number;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    if (!isAnimating && currentIndex > 0) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating && currentIndex < images.length - 1) {
      setIsAnimating(true);
      setCurrentIndex((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isAnimating]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative w-full max-w-7xl flex flex-col justify-center min-h-[80vh] lg:min-h-0 lg:pt-20  mx-auto p-4">
      <div className="flex  w-full lg:gap-4 gap-2">
        {/* Left Image */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[600px] lg:h-[800px] overflow-hidden group">
          <img
            src={images[currentIndex].left.src}
            alt={images[currentIndex].left.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded">
            {currentIndex * 2 + 1} / {images.length * 2}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[600px] lg:h-[800px] overflow-hidden group">
          <img
            src={images[currentIndex].right.src}
            alt={images[currentIndex].right.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded">
            {currentIndex * 2 + 2} / {images.length * 2}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrevious}
        className={`absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === 0}
        aria-label="Previous pair"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className={`absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors ${
          currentIndex === images.length - 1
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={currentIndex === images.length - 1}
        aria-label="Next pair"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-4 overflow-x-auto px-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 500);
              }
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            }`}
            aria-label={`Go to pair ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
