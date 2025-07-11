import FeaturedCard from "../../components/FeaturedCard";
import NewsCard from "../../components/NewsCard";
import { getDictionary } from "../dictionaries";

export default async function Home({ params }) {
    const locale = params?.locale || "en";
    const dict = await getDictionary(locale);
    const data = await import("../../data/data.json").then((m) => m.default);

    // Shuffle and pick one featured item
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    const featured = shuffled[0];

    return (
        <div className="container mx-auto p-4">
            {/* Featured Card */}
            <FeaturedCard news={featured} locale={locale} />

            {/* Latest Stories */}
            <h1 className="text-2xl font-bold mb-4">{dict.latestStories}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.map((news) => (
                    <NewsCard key={news.article_id} news={news} locale={locale} />
                ))}
            </div>
        </div>
    );
}
