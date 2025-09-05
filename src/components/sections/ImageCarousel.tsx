import { useState, useEffect } from "react"

const images = [
  "/lovable-uploads/f6ac3eb5-712d-4f30-b137-0dbf77eade94.png",
  "/lovable-uploads/6421d2ba-b203-4508-a5a7-59e804c07708.png",
  "/lovable-uploads/4367e489-3926-4635-abd9-38a3f739cbef.png"
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