"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../public/assets/logo.png";
export default function Navbar({ locale, dict }) {
    return (
        <nav className="bg-white border-b border-gray-200 px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <Link href={`/${locale}`} className="flex items-center">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={32}
                            height={32}
                            className="mr-2"
                        />
                        <h1 className="text-xl font-bold tracking-wider">The News Island</h1>
                    </Link>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
                                <path d="M8 14a5 5 0 1 1 8 0" />
                                <circle cx="12" cy="11" r="1" />
                                <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">5,810</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link href={`/${locale}`} className="text-sm hover:text-gray-600 transition-colors">{dict.world}</Link>
                        <Link href={`/${locale}`} className="text-sm hover:text-gray-600 transition-colors">{dict.business}</Link>
                        <Link href={`/${locale}`} className="text-sm hover:text-gray-600 transition-colors">{dict.lifestyle}</Link>

                        <div className="flex items-center space-x-2 text-sm">
                            <LanguageSwitcher locale={locale} />
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    );
}
