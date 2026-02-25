import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center px-[min(5vw,48px)] h-16 bg-transparent">

      {/* Left: Logo */}
      <a href="/" className="flex items-center gap-2.5 no-underline justify-self-start">
        <div className="w-[30px] h-[30px] rounded-lg overflow-hidden bg-black shrink-0">
          <Image
            src="/thumbnail_logo.png"
            alt="Nailart AI logo"
            width={30}
            height={30}
            className="rounded-lg"
          />
        </div>
        <span className="text-2xl font-bold [font-family:var(--font-indie-flower),cursive] [text-shadow:0_2px_12px_rgba(0,0,0,0.4)]">
          Nailart AI.
        </span>
      </a>

      {/* Center: Nav links */}
      <div className="flex gap-8">
        <Link href="#features" className="text-white no-underline text-lg opacity-85 transition-opacity duration-200 hover:opacity-100">
          Features
        </Link>
        <Link href="#pricing" className="text-white no-underline text-lg opacity-85 transition-opacity duration-200 hover:opacity-100">
          Pricing
        </Link>
        <Link href="#contact" className="text-white no-underline text-lg opacity-85 transition-opacity duration-200 hover:opacity-100">
          Contact
        </Link>
      </div>

      {/* Right: CTA */}
      <div className="justify-self-end">
        <a
          href="#generate"
          className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white no-underline text-[0.8rem] font-bold shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] backdrop-blur-[6px] tracking-[0.01em] hover:bg-white/20 transition-colors"
        >
          Get Started
        </a>
      </div>

    </nav>
  );
}
