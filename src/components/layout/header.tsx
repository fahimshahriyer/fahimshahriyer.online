import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky mt-4 top-4 z-50 px-2 md:px-4 md:flex justify-center">
      <nav className="border border-border px-4 flex items-center backdrop-filter backdrop-blur-xl bg-[#FFFFFF] dark:bg-[#121212] bg-opacity-70 h-[50px] z-20 relative">
        <div className="space-x-2 font-bold text-sm hidden md:flex mx-3">
          <Link className="flex items-center justify-center" href="/">
            <span className="ml-2 text-lg font-bold">FS</span>
          </Link>
          <Link
            className="h-8 items-center justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="h-8 items-center justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#education"
          >
            Education
          </Link>
          <Link
            className="h-8 items-center justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#works"
          >
            Works
          </Link>
          <Link
            className="h-8 items-center justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#certifications"
          >
            Certifications & Training
          </Link>
          <Link
            className="h-8 items-center justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#languages"
          >
            Language Skills
          </Link>
          <Link
            className="h-8 items-center border-l-[1px] pl-8 justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#"
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}
