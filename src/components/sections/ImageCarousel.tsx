import { useState, useEffect } from "react"

const images = [
  "/lovable-uploads/3897fd2d-56d1-4ff4-8e7c-a4e4e9a16434.png",
  "/lovable-uploads/c0865d89-9004-4e6f-a086-33d0b18e2cc1.png",
  "/lovable-uploads/de376657-541a-4b02-ae8a-1bda744a5854.png"
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