import React from 'react'

const images = [
  '/ambiente-libre-polvo.webp',
  '/clean-sofa.jpg',
  '/deep-cleaning-roof.png',
  '/before-after.webp',
  '/COOKER-before-after.png',
  '/Cleaning-Services-Before-and-After.jpeg',
  '/glass-cleaning-services.jpg',
  '/Deep-Cleaning-Services.jpg',
  '/deep-cleaning1.jpg',
]

type OfferSectionDict = {
  headline: string
  headline2: string
}

type Dict = {
  offerSection: OfferSectionDict
}

const Gallery = ({ dict }: { dict: Dict }) => (
  <section id="gallery" className="bg-white py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937] mb-12">
        {dict.offerSection.headline}{' '}
        <span className="text-[#0078A0]">{dict.offerSection.headline2}</span>
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#E9F8FD]"
          >
            <img
              src={src}
              alt={`Cleaning service example ${idx + 1}`}
              className="w-full h-64 object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Gallery
