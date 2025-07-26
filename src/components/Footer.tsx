import Link from "next/link";
import React from "react";
import Image from "next/image";

const siteDetails = {
  siteName: "Daxia Clean Services",
  logoSrc: "/logoazul.jpeg",
};

const footerDetails = {
  Address: "2615 Vinson Ave, Sarasota, FL 34232",
  Horario: "Monday - Saturday: 6am - 5pm",
  email: "wicholands@gmail.com",
  telephone: "+1 (941) 879-4806",
  socials: {
    Facebook: "https://facebook.com/WICHOLANDSCAPINGLLC",
    Instagram: "https://www.instagram.com/wicho_landscaping_llc?igsh=M2xnYno0cDd4cHls",
    WhatsApp: "https://wa.me/19418794806",
  },
};

const getPlatformIconByName = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    Facebook: (
      <svg
        className="w-6 h-6 fill-current text-[#333333] hover:text-[#1CA8E3] transition-colors"
        viewBox="0 0 24 24"
      >
        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987H7.898v-2.89h2.54v-2.2c0-2.507 1.492-3.89 3.778-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.77-1.63 1.562v1.872h2.773l-.443 2.89h-2.33v6.987C18.343 21.126 22 17 22 12" />
      </svg>
    ),
    Instagram: (
      <svg
        className="w-6 h-6 fill-current text-[#333333] hover:text-[#1CA8E3] transition-colors"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 1a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
      </svg>
    ),
    WhatsApp: (
      <svg
        className="w-6 h-6 fill-current text-[#333333] hover:text-[#1CA8E3] transition-colors"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.001 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.827.827 5.468 2.24 7.705L2.68 29.32a1.34 1.34 0 0 0 1.653 1.652l5.614-2.227A13.288 13.288 0 0 0 16 29.334c7.36 0 13.334-5.974 13.334-13.334S23.36 2.667 16 2.667zm0 24a10.666 10.666 0 0 1-5.44-1.467l-.4-.24-3.36 1.333 1.333-3.36-.24-.4A10.66 10.66 0 1 1 16 26.667zm5.36-7.493c-.293-.147-1.733-.867-2.007-.973-.267-.107-.467-.16-.667.107s-.76.973-.933 1.173c-.16.187-.347.213-.64.067-1.76-.88-2.907-1.573-4.053-3.493-.307-.533.307-.493.88-1.64.093-.187.047-.347-.027-.493-.08-.147-.667-1.6-.907-2.187-.24-.56-.48-.48-.667-.48-.173-.013-.347-.013-.533-.013-.187 0-.493.067-.76.32-.267.267-1.013.987-1.013 2.4s1.04 2.787 1.187 2.987c.16.213 2.053 3.12 5.027 4.373.707.307 1.253.493 1.787.64.747.213 1.427.187 1.973.107.6-.093 1.733-.707 1.973-1.387.24-.693.24-1.293.173-1.387-.08-.107-.267-.173-.56-.293z" />
      </svg>
    ),
  };
  return icons[name] || null;
};

type NavLinks = {
  [key: string]: string;
};

type FooterDict = {
  subheading: string;
  quickLinksTitle: string;
  addressLabel: string;
  hoursLabel: string;
  emailLabel: string;
  phoneLabel: string;
  contactTitle: string;
  copyright: string;
};

type Dict = {
  footer: FooterDict;
  nav: NavLinks;
};

const navUrls: Record<string, string> = {
  work: "#work",
  services: "#services",
  about: "#about",
  faq: "#faq",
  contact: "#contact",
};

const Footer: React.FC<{ dict: Dict }> = ({ dict }) => {
  const f = dict.footer;
  const nav = dict.nav;

  return (
    <footer className="bg-[#0078A0] text-[#E9F8FD] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo y subtítulo */}
        <div>
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={siteDetails.logoSrc}
              alt={`${siteDetails.siteName} Logo`}
              width={80}
              height={80}
              className="rounded-xl object-contain"
            />
            <h3 className="text-2xl font-semibold cursor-pointer text-white">{siteDetails.siteName}</h3>
          </Link>
          <p className="mt-4 text-lg font-light max-w-sm text-[#BEE3F8]">{f.subheading}</p>
          
        </div>

        {/* Quick Links desde dict.nav */}
        <div>
          <h4 className="text-xl font-semibold mb-5 text-[#E0F7FA]">{f.quickLinksTitle}</h4>
          <ul className="flex flex-col gap-3 font-light max-w-sm text-[#BEE3F8]">
            {Object.keys(nav).map((key) => (
              <li key={key}>
                <Link
                  href={navUrls[key] || "#"}
                  className="hover:text-[#1CA8E3] transition-colors duration-200"
                >
                  {nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto y redes */}
        <div id="contact">
          <h4 className="text-xl font-semibold mb-5 text-[#E0F7FA]">{f.contactTitle}</h4>
          <div className="flex flex-col gap-3 text-lg font-light max-w-sm text-[#BEE3F8]">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                footerDetails.Address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1CA8E3] transition-colors text-base"
            >
              {f.addressLabel}: {footerDetails.Address}
            </a>
            <span>{f.hoursLabel}: {footerDetails.Horario}</span>
            <a
              href={`mailto:${footerDetails.email}`}
              className="hover:text-[#1CA8E3] transition-colors text-base"
            >
              {f.emailLabel}: {footerDetails.email}
            </a>
            <a
              href={`tel:${footerDetails.telephone}`}
              className="hover:text-[#1CA8E3] transition-colors text-base"
            >
              {f.phoneLabel}: {footerDetails.telephone}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6">
            {Object.keys(footerDetails.socials).map((platformName) => {
              const url =
                footerDetails.socials[platformName as keyof typeof footerDetails.socials];
              return (
                <Link
                  key={platformName}
                  href={url}
                  aria-label={platformName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#333333] hover:text-[#1CA8E3] transition-colors text-base"
                >
                  {getPlatformIconByName(platformName)}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-[#BEE3F8] leading-relaxed">
        &copy; {new Date().getFullYear()} {siteDetails.siteName}. {f.copyright}
      </div>
    </footer>
  );
};

export default Footer;
