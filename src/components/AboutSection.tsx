'use client'

import { motion } from 'framer-motion'

type Stat = {
  name: string
  value: string
}

type About = {
  title: string
  description: string
  description2: string
  description3: string
  stats: Stat[]
}

type Dict = {
  about: About
}

type Props = {
  dict: Dict
}

export default function AboutWithStats({ dict }: Props) {
  const about = dict.about
  const stats = about.stats

  return (
    <div id="about" className="relative isolate overflow-hidden py-24 sm:py-32"
    style={{
      backgroundImage: `
        linear-gradient(135deg, rgba(28,168,227,0.7) 0%, rgba(0,120,160,0.7) 100%),
        url('/cleaningservices.jpg')
      `,
      backgroundSize: 'auto 100%', // ancho automático, altura 100% para no estirar demasiado
      backgroundPosition: 'right bottom',
      backgroundRepeat: 'no-repeat',
      minHeight: '600px',
    }}
  >
    <style jsx>{`
      @media (max-width: 640px) {
        div#about {
          backgroundPosition: right bottom !important;
          backgroundSize: 'contain' !important;
          minHeight: 400px !important;
        }
      }
    `}</style>
      {/* Fondos decorativos (sin cambios) */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">{about.title}</h2>
          <p className="mt-8 text-lg font-medium text-left text-[#BEE3F8] sm:text-xl leading-relaxed">
            {about.description}{' '}
            <span className="font-semibold text-[#FFFFFF]">{about.description2}</span>{' '}
            {about.description3}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-2 gap-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat: Stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base font-medium text-[#BEE3F8]">{stat.name}</dt>
                <dd className="text-4xl font-extrabold tracking-tight text-[#E9F8FD]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </div>
  )
}
