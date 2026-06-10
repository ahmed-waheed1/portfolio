import Image from "next/image";
import SocialLinks from "./components/SocialLinks";
import Typewriter from "./components/Typewriter";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <main
      className="relative flex flex-1 flex-col overflow-hidden bg-[#2fc6f5] bg-cover bg-center"
      style={{ backgroundImage: `url(${basePath}/cloud-bg.png)` }}
    >
      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-16 px-6 py-20 lg:flex-row lg:gap-8 lg:px-12">
        {/* intro */}
        <div className="flex w-full flex-col items-start gap-7 lg:w-1/2">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            <span className="text-gray-900">Hi, I am Ahmed</span>
            <span className="block min-h-[1.2em] text-[#3D5AF1]">
              <Typewriter />
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-gray-800">
            I am a Software Engineer and Flutter Developer passionate about
            building mobile apps. I&apos;m looking for junior developer
            opportunities where I can contribute, learn, and grow.
          </p>

          <SocialLinks />

          <a
            href={`${basePath}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex h-14 w-full max-w-xs items-center justify-center rounded-md bg-[#3D7EF1] text-lg font-medium text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-[#2f63d8]"
          >
            Resume
          </a>
        </div>

        {/* illustration */}
        <div className="flex w-full justify-center lg:w-1/2">
          <Image
            src={`${basePath}/webdev.svg`}
            alt="Illustration of a developer coding at a desk"
            width={640}
            height={520}
            priority
            className="h-auto w-full max-w-[640px] animate-float-slow"
          />
        </div>
      </section>
    </main>
  );
}
