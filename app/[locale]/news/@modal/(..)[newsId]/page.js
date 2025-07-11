import { getDictionary } from "@/app/dictionaries/index";
import newsData from "@/data/data.json";
import NewsModal from "@/components/NewsModal";
import { notFound } from "next/navigation";

export default async function NewsModalPage({ params }) {
    const { locale, newsId } = params;
    console.log("Modal route triggered:", params);
    const dict = await getDictionary(locale);
    const newsItem = newsData.find((item) => item.article_id === newsId);
    console.log("Modal found news:", newsItem);

    if (!newsItem || !newsItem.article_id) {
        console.log("Modal news not found or invalid:", newsItem);
        notFound();
    }

    return <NewsModal dict={dict} news={newsItem} locale={locale} />;
}