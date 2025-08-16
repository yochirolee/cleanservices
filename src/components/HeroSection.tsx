'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSwitcher from './LanguageSwitcher'
import Link from 'next/link'

type NavDict = {
  work: string
  services: string
  about: string
  faq: string
  contact: string
}

type HeroDict = {
  headline: string
  subtext: string
  quote: string
  view: string
}

type Dict = {
  nav: NavDict
  hero: HeroDict
}

export default function HeroSection({ dict }: { dict: Dict }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const textControls = useAnimation()
  const linksControls = useAnimation()

  const navigation = [
    { name: dict.nav.work, href: '#gallery' },
    { name: dict.nav.services, href: '#services' },
    { name: dict.nav.about, href: '#about' },
    { name: dict.nav.faq, href: '#faq' },
    { name: dict.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    textControls.start({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } })
    linksControls.start({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 1.1 } })
  }, [textControls, linksControls])

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" aria-label="Nika LLC Home" className="-m-1.5 p-1.5">
              <motion.img
                src="/nika-logo.png"
                alt="Nika LLC Cleaning Services"
                className="w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 h-auto"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-sky-950 hover:text-white"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <LanguageSwitcher />
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href} // hash links: OK con <a>
                className="text-sm font-semibold text-white hover:text-[#333333] transition-colors text-base"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 + i * 0.1 } }}
              >
                {item.name}
              </motion.a>
            ))}
            <LanguageSwitcher />
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              {/* ⬇️ Cambiado a Link */}
              <Link href="/" aria-label="Nika LLC Home" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="/nika-logo-azul.png"
                  alt="Nika LLC Cleaning Services"
                  className="w-12 sm:w-14 md:w-16 h-auto"
                />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-sky-900"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href} // hash links: OK con <a>
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-sky-900 hover:bg-sky-50"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="tel:5025338342" // externo: OK con <a>
                className="block rounded-lg px-3 py-2 text-base font-semibold text-sky-900 hover:bg-sky-50"
              >
                {dict.hero.quote}
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="relative isolate overflow-hidden bg-gradient-to-b from-sky-700 to-sky-500 text-white pt-28 pb-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.h1
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
          >
            {dict.hero.headline}
          </motion.h1>

          <motion.p
            className="mt-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={textControls}
          >
            {dict.hero.subtext}
          </motion.p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a
              href="tel:5025338342"
              className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-sky-700 shadow-sm hover:bg-yellow-200"
              initial={{ opacity: 0, y: 20 }}
              animate={linksControls}
            >
              {dict.hero.quote}
            </motion.a>

            <motion.a
              href="#services"
              className="text-sm font-semibold hover:text-yellow-200 text-white hover:underline"
              initial={{ opacity: 0, y: 20 }}
              animate={linksControls}
            >
              {dict.hero.view} <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </div>

        <img
          src="/apartment-cleaning-services.webp"
          alt="Cleaning Service"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
      </main>
    </div>
  )
}
