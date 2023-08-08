import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import React, { useState, useEffect, useCallback, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
// import { Thumb } from "./EmblaCarouselThumbsButton"


type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })
  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="flex items-start relative">
      <div className="hidden small:flex flex-col gap-y-4 sticky top-20">
        {images.map((image, index) => {
          return (
            <button
              key={image.id}
              className="h-14 w-12 relative border border-white"
              onClick={() => {
                handleScrollTo(image.id)
              }}
            >
              <span className="sr-only">Go to image {index + 1}</span>
              <Image
                src={image.url}
                className="absolute inset-0"
                alt="Thumbnail"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </button>
          )
        })}
      </div>
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {images.map((image, index) => {
          return (
            <div
              ref={(image) => imageRefs.current.push(image)}
              key={image.id}
              className="relative aspect-[29/34] w-full"
              id={image.id}
            >
              <Image
                src={image.url}
                priority={index <= 2 ? true : false}
                className="absolute inset-0"
                alt={`Product image ${index + 1}`}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGallery
