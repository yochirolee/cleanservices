'use client'

import {
  SprayCan,
  Home,
  Sparkles,
  Building,
  Leaf,
  ShowerHead,
} from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import { GiVacuumCleaner } from "react-icons/gi"

type Service = {
  title: string
  description: string
}

type Dict = {
  socialProof: {
    title: string
    title2: string
    services: Service[]
  }
}

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 18,
    },
  },
}

export default function OurServices({ dict }: { dict: Dict }) {
  const services = dict.socialProof.services

  const icons = [
    <Home key="spray" className="h-6 w-6" />,
    <Building key="broom" className="h-6 w-6" />,
    <SprayCan key="sparkles" className="h-6 w-6" />,
    <Sparkles key="bath" className="h-6 w-6" />,
    <ShowerHead key="shirt" className="h-6 w-6" />,
    <GiVacuumCleaner key="window" className="h-6 w-6" />,
    <Leaf key="washer" className="h-6 w-6" />,
  ]

  return (
    <section id="services" className="bg-white">
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937] capitalize">
          {dict.socialProof.title}{' '}
          <span className="text-[#0078A0]">{dict.socialProof.title2}</span>
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center rounded-2xl bg-[#E9F8FD] p-6 text-center shadow-md hover:shadow-lg transition"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <span className="inline-block rounded-full bg-[#E9F8FD] p-3 text-[#0078A0]">
                {icons[index % icons.length]}
              </span>
              <h2 className="mt-3 text-lg md:text-xl font-semibold text-[#374151]">
                {service.title}
              </h2>
              <p className="mt-2 text-[#6B7280]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
