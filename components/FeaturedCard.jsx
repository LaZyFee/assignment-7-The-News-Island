"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FeaturedCard({ news, locale }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(
      "FeaturedCard clicked, navigating to:",
      `/${locale}/news/${news.article_id}`
    );
    router.push(`/${locale}/news/${news.article_id}`);
  };

  return (
    <section className="mb-12 px-4 md:px-6 lg:px-0">
      <article
        onClick={handleClick}
        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-2 lg:order-1 p-6 lg:p-8 flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-black text-white text-xs rounded-full">
                Featured
              </span>
              <span className="text-sm text-gray-600">
                {news.readTime || "5 min read"}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-normal leading-tight mb-4">
              {news.title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
              {news.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                  <Image
                    src={news.avatar || "/assets/avatar/avatar-1.png"}
                    alt={news.author}
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{news.author}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(news.pubDate).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <button
                onClick={handleClick}
                className="text-sm hover:text-gray-600 transition-colors"
              >
                Read more →
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative h-64 lg:h-auto min-h-[300px]">
            <Image
              src={news.image_url || "/assets/articles/article-1.jpg"} // Updated fallback
              alt={news.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </article>
    </section>
  );
}
