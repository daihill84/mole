import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1a2e2e]">
      <Head>
        <title>Terms & Conditions | Welsh Mole Catcher</title>
        <meta name="description" content="Terms & Conditions for Welsh Mole Catcher." />
        <link rel="icon" href="/favicon.ico" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            script-src 'self' 'unsafe-eval' https://www.googletagmanager.com;
            style-src 'self' 'unsafe-inline';
            img-src 'self' data: https://via.placeholder.com;
            connect-src 'self' https://www.googletagmanager.com;
            frame-src 'self' https://www.googletagmanager.com;
          "
        />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      </Head>
      <header className="bg-gradient-to-r from-[#1a3c34] to-[#2e5b52] text-[#f5e9c4] p-6">
        <nav className="container mx-auto flex justify-between items-center max-w-7xl">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Welsh Mole Catcher Logo" width={50} height={50} className="rounded-full" />
            <span className="text-2xl font-extrabold tracking-tight">Welsh Mole Catcher</span>
          </Link>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-20 max-w-5xl">
        <h1 className="text-4xl font-bold mb-12 text-[#1a3c34]">Terms & Conditions</h1>
        <p className="text-lg text-[#4a4a4a] leading-relaxed">
          These are the terms and conditions for Welsh Mole Catcher.
        </p>
        {/* Add more content as needed */}
      </main>
      <footer className="bg-[#1a3c34] text-[#f5e9c4] py-12">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-lg mb-4">© {new Date().getFullYear()} Welsh Mole Catcher. All rights reserved.</p>
          <p className="text-lg mb-4">
            <Link href="/privacy-policy/" className="hover:underline underline-offset-4">Privacy Policy</Link> |{' '}
            <Link href="/terms-conditions/" className="hover:underline underline-offset-4">Terms & Conditions</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}