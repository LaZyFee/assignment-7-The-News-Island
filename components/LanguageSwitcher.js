"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import bdFlagIcon from "../public/bdflag.png";
import enFlagIcon from "../public/enflag.jpeg";

export default function LanguageSwitcher({ locale }) {
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: "en", language: "English" },
        { code: "bn", language: "Bangla" },
    ];

    const found = languages.find((lang) => pathname.includes(`/${lang.code}/`)) || languages[0];
    const [selectedLanguage, setSelectedLanguage] = useState(found);
    const [showMenu, setShowMenu] = useState(false);

    const handleLanguageChange = (langCode) => {
        const newPath = pathname.replace(/^\/(en|bn)/, `/${langCode}`);
        setSelectedLanguage(languages.find((lang) => lang.code === langCode));
        setShowMenu(false);
        router.push(newPath);
    };

    return (
        <div className="flex gap-4 items-center">
            <div className="relative">
                <button
                    className="flex items-center gap-2"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <Image
                        className="max-w-8"
                        src={selectedLanguage.code === "en" ? enFlagIcon : bdFlagIcon}
                        alt="language flag"
                        height={100}
                        width={165}
                    />
                    {selectedLanguage.language}
                </button>
                {showMenu && (
                    <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                        {languages.map((entry) => (
                            <li
                                key={entry.code}
                                onClick={() => handleLanguageChange(entry.code)}
                                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                            >
                                <Image
                                    className="max-w-8"
                                    src={entry.code === "en" ? enFlagIcon : bdFlagIcon}
                                    alt={entry.language}
                                    height={100}
                                    width={165}
                                />
                                {entry.language}
                            </li>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}