import { getDictionary } from "@/app/dictionaries/index";
import newsData from "@/data/data.json";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function NewsDetail({ params }) {
    const { newsId, locale } = params;
    const dict = await getDictionary(locale);
    const news = newsData.find((item) => item.article_id === newsId);
    if (!news || !news.article_id) notFound();

    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Article */}
                <article className="lg:col-span-3">
                    {/* Title */}
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
                            {news.title}
                        </h1>
                    </header>

                    {/* Image */}
                    <div className="mb-8">
                        <Image
                            src={news.image_url || "/assets/articles/article-1.jpg"}
                            alt={news.title}
                            width={1200}
                            height={600}
                            className="w-full h-auto rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Article Body */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg leading-relaxed mb-6">{news.description}</p>
                        <p className="text-lg leading-relaxed mb-8">{news.content}</p>
                    </div>

                    {/* Social Actions */}
                    <div className="flex items-center space-x-6 mb-8">
                        {/* Share */}
                        <button className="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                            <span>{dict.share}</span>
                        </button>

                        {/* Bookmark */}
                        <button className="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <span>{dict.bookmark}</span>
                        </button>

                        {/* Read time */}
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{news.readTime || "3 min read"}</span>
                        </div>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-8 space-y-6">
                        {/* Author Info */}
                        <div>
                            <h3 className="text-lg font-medium mb-2">{news.author}</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                {new Date(news.pubDate).toLocaleString(locale, {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                        </div>

                        {/* Comments */}
                        <div>
                            <p className="text-lg font-medium mb-2">{news.comments} {dict.comments}</p>
                            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">
                                {dict.joinDiscussion}
                            </a>
                        </div>

                        {/* Category */}
                        <div>
                            <p className="text-sm text-gray-600 mb-1">{dict.category}</p>
                            <p className="font-medium">{news.category?.[0]}</p>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
