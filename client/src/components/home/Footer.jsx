"use client";
import { Typography, Avatar } from "@material-tailwind/react";
import Logo from "../../assets/HSL.png";

const SITEMAP = [
  {
    title: "Quick Links",
    links: [
      { name: "About Us", url: "/" },
      { name: "Event Calendar", url: "/" },
      { name: "Contact Us", url: "/" },
    ],
  },
  {
    title: "Social Link",
    links: [
      { name: "Instagram", url: "https://www.instagram.com/max.healthcare/?hl=en" },
      { name: "Twitter", url: "https://x.com/MaxHealthcare?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" },
      { name: "GitHub", url: "https://github.com/Piyusharora04" },
      { name: "LinkedIn", url: "https://in.linkedin.com/company/max-healthcare" },
    ],
  },
  {
    title: "Meet Us ",
    links: [
      { name: "+91 123456789", url: "tel:+91123456789" },
      { name: "HealthSaathi.com", url: "#" },
      {
        name: "HealthSaathi Solutions Pvt. Ltd.\nPunjab, 140041",
        url: "#",
      },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-black rounded-t-[4rem] pb-4">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="ml-4 mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="text-white flex flex-col gap-4 items-start justify-start">
            <div className="flex items-center justify-center gap-2">
              <Avatar
                size="sm"
                variant="circular"
                src={Logo}
                alt="HealthSaathi Logo"
              />
              <p className="text-2xl uppercase tracking-widest font-bold text-[#2a8981]">
                HealthSaathi
              </p>
            </div>
            <p className="w-3/4 text-base text-[#a9a9a9]">
              Meet HealthSaathi! We’re here to revolutionize healthcare and
              bring your clinic experience online.
            </p>
          </div>

          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                className="mb-4 font-bold uppercase text-white text-2xl"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map(({ name, url }, key) => (
                  <Typography
                    key={key}
                    as="li"
                    className="font-normal text-gray-600 hover:text-white text-xl"
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {name}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Typography
          variant="small"
          className="mb-4 text-center font-normal text-white md:mb-0"
        >
          &copy; {currentYear}{" "}
          <a href="https://healthsaathi.com" target="_blank" rel="noopener noreferrer">
            HealthSaathi
          </a>
          . All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
}
