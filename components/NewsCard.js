"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NewsCard({ news, locale }) {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        const url = `/${locale}/news/${news.article_id}`;
        console.log("NewsCard clicked, navigating to:", url);
        router.push(url, { scroll: false });
    };

    return (
        <article
            onClick={handleClick}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
        >
            <div className="relative w-full h-48">
                <Image
                    src={news.image_url || "/assets/articles/article-1.jpg"}
                    alt={news.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                    {news.category?.[0] && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {news.category[0]}
                        </span>
                    )}
                    <span className="text-xs text-gray-500">{news.readTime || "3 min read"}</span>
                </div>
                <h3 className="text-xl font-medium mb-3 leading-tight">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {news.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
                            <Image
                                src={news.avatar || "/assets/avatar/avatar-2.png"}
                                alt={news.author}
                                width={24}
                                height={24}
                            />
                        </div>
                        <span className="text-xs text-gray-500">{news.author}</span>
                    </div>
                    <span className="text-xs text-gray-400">
                        {new Date(news.pubDate).toLocaleDateString(locale, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </span>
                </div>
            </div>
        </article>
    );
}