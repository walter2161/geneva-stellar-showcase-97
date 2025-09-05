import { useState, useEffect } from "react"

const images = [
  "/lovable-uploads/profissional-1.png",
  "/lovable-uploads/profissional-2.png",
  "/lovable-uploads/profissional-3.png"
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Profissional Geneva ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}