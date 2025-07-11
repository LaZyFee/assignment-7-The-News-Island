"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NewsModal({ dict, news, locale }) {
    const router = useRouter();
    const handleClose = () => {
        router.back();
    };

    if (!news) {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded max-w-xl text-black">
                    <p>{dict?.notFound || "News not found."}</p>
                    <button
                        className="mt-4 text-red-500"
                        onClick={() => router.back()}
                    >
                        {dict?.close || "Close"}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/50 h-screen z-40" onClick={handleClose} />

            {/* Modal Content */}
            <article className="fixed top-10 left-1/2 -translate-x-1/2 max-w-4xl w-[95%] bg-white rounded-md shadow-lg z-50 overflow-y-auto max-h-[90vh]">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
                {/* Header */}
                <header className="p-6 sticky top-0 bg-white z-10 border-b">
                    <h1 className="text-4xl font-normal leading-tight">{news.title}</h1>
                </header>

                {/* Image */}
                <div className="p-6">
                    <Image
                        src={news.image_url || "/assets/articles/article-1.jpg"}
                        alt={news.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto rounded-lg shadow-sm"
                    />
                </div>

                {/* Body */}
                <div className="p-6 prose prose-lg max-w-none text-black">
                    <p className="mb-6">{news.description}</p>
                    <p className="mb-6">
                        {dict.author}: {news.author}
                    </p>
                    <p className="mb-6">
                        {dict.category}: {news.category[0]}
                    </p>
                    <p className="mb-6">
                        {dict.time}:{" "}
                        {new Date(news.pubDate).toLocaleDateString(locale, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </p>
                </div>

                {/* Actions */}
                <div className="flex gap-6 px-6 pb-6 text-sm">
                    <button className="text-blue-600 hover:underline">{dict.share}</button>
                    <button className="text-blue-600 hover:underline">{dict.bookmark}</button>
                    <span className="text-gray-600 ml-auto">{news.readTime || "7 min read"}</span>
                </div>
            </article>
        </>
    );
}