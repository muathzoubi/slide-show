'use client';
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Link from "next/link";

const slides = [
  {
    title: "مرحبًا بكم في موقعنا",
    description: "اكتشف عالمًا من الإمكانيات مع خدماتنا المبتكرة",
    image: "/1.png",
  },
  {
    title: "خدماتنا المتميزة",
    description: "نقدم حلولًا متكاملة لتلبية احتياجاتك",
    image: "/2.png",
  },
  {
    title: "فريقنا المحترف",
    description: "خبراء متخصصون في خدمتك على مدار الساعة",
    image: "/3.png",
  },
]

export function FullPageSlideshow() {
  const [currentSlide, setCurrentSlide] =useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

 useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl md:text-2xl">{slide.description}</p>
              <div>
            <Link href="https://protection-three.vercel.app/data" className="h-12 p-5" > <Button>قدم طلبك</Button></Link>

            </div></div>
            <div>

            </div>
          </div>

        </div>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={prevSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">السابق</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={nextSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">التالي</span>
      </Button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">الشريحة {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}