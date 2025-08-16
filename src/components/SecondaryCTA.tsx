'use client'

import { motion } from 'framer-motion'

type SecondaryCTADict = {
  title1: string
  title2: string
  description: string
  button: string
}

type Dict = {
  secondaryCTA: SecondaryCTADict
}

type Props = {
  dict: Dict
}

export default function SecondaryCTA({ dict }: Props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-[#0078A0] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          {/* Decoración SVG radial sutil */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[36rem] -translate-y-1/2 -translate-x-1/2 opacity-30"
          >
            <circle r={512} cx={512} cy={512} fill="white" fillOpacity="0.15" />
          </svg>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
          >
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {dict.secondaryCTA.title1}{' '}
              <span className="text-[#1CA8E3]">{dict.secondaryCTA.title2}</span>
            </h2>
            <p className="mt-8 text-lg font-medium text-[#E0F7FA] leading-relaxed">
              {dict.secondaryCTA.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="tel:5025338342"
                className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#0078A0] shadow-md hover:bg-yellow-200 transition"
              >
                {dict.secondaryCTA.button}
              </a>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative mt-12 w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem]"
          >
            <img
              alt="Cleaning Services Sarasota"
              src="/clean-house1.jpg"
              width={1824}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover rounded-md shadow-lg ring-1 ring-white/20"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
