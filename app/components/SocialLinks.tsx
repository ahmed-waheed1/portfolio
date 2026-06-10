import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/ahmed-waheed1",
    icon: "/github.png",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ahmed-waheed11",
    icon: "/linkedin.png",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="transition-transform hover:-translate-y-1"
        >
          <Image
            src={`${basePath}${social.icon}`}
            alt={social.name}
            width={40}
            height={40}
          />
        </a>
      ))}
    </div>
  );
}
