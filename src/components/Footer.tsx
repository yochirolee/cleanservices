import Link from "next/link";
import React from "react";
import Image from "next/image";

const siteDetails = {
  siteName: "Nika LLC",
  logoSrc: "/logoazul.jpeg",
};

const footerDetails = {
  Address: "4613 Clayton Terrace, Louisville, KY 40214",
  Horario: "Lunes a Domingo",
  email: "anaygonzalez2607@gmail.com",
  telephone: "+1 (502) 533-8342",
  socials: {
    Facebook: "https://www.facebook.com/anay.gonzalez.71465",
    Instagram: "https://www.instagram.com/anay.gonzalez.martinez71465/",
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
  hours: string;
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
            <span className="hover:text-[#1CA8E3] transition-colors text-base">
              {f.hoursLabel}: {f.hours}
            </span>
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
