import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lagenio Europe | Top State-of-the-Art Technology",
  description: "Official European distributor for Lagenio mobile phones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-slate-50`}>
        
        {/* Main Navigation (Placeholder for Retail / Cart / About links) */}
        <nav className="bg-white px-8 py-4 flex justify-between items-center shadow-sm border-b border-slate-200">
          <div className="font-black text-2xl text-blue-600 tracking-tighter">LAGENIO</div>
          <div className="flex gap-6 font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition">Consumer</Link>
            <Link href="/retail" className="hover:text-blue-600 transition">Retail</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/cart" className="hover:text-blue-600 transition">Cart (0)</Link>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Global Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 px-8 text-center relative mt-auto">
          <p className="mb-2">© 2026 Lagenio Europe. All rights reserved.</p>
          <p className="text-sm">Manufactured by TIRISEN INTERNATIONAL TRADING CO., LIMITED.</p>
          <p className="text-sm">Swedish Importer & Responsible Person: Ernst-William Hertz</p>
          
          {/* 
            HIDDEN ADMIN LINK 
            Uses 'text-transparent' by default. Reveals slightly on hover to 'text-slate-800' 
            so it remains nearly invisible against the slate-900 background unless highlighted.
          */}
          <Link 
            href="/admin-login" 
            className="absolute bottom-4 right-4 text-transparent hover:text-slate-800 select-none cursor-default transition-colors text-xs"
          >
            Admin Panel
          </Link>
        </footer>
      </body>
    </html>
  );
}