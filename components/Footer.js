import { getDictionary } from "../app/dictionaries";

export default async function Footer({ locale = "en" }) {
    const dict = await getDictionary(locale);

    return (
        <footer className="bg-white border-t border-gray-200 mt-16 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm text-gray-600">
                    © 2025{" "}
                    <a
                        href="https://learnwithsumit.com/"
                        className="text-gray-600 hover:underline"
                    >
                        Learn with Sumit
                    </a>. {dict.allRightsReserved}
                </p>
            </div>
        </footer>
    );
}
