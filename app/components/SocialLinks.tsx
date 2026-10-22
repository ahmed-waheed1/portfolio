import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/ahmed-waheed1",
    icon: "/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ahmed-waheed11",
    icon: "/linkedin.svg",
  },
  {
    name: "Email ahmedwaheed4047@gmail.com",
    href: "mailto:ahmedwaheed4047@gmail.com",
    icon: "/gmail.svg",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {SOCIALS.map((social) => {
        // mailto opens the mail app, so only web links get a new tab
        const external = social.href.startsWith("http");
        return (
          <a
            key={social.name}
            href={social.href}
            {...(external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className="block rounded-md transition-transform motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
          >
            <span className="sr-only">
              {social.name}
              {external && " (opens in new tab)"}
            </span>
            <Image
              src={`${basePath}${social.icon}`}
              alt=""
              width={40}
              height={40}
              loading="eager"
            />
          </a>
        );
      })}
    </div>
  );
}
