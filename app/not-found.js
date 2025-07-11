import { getDictionary } from "./dictionaries";

export default async function NotFound({ params }) {
    const locale = params?.locale || "en";
    const dict = await getDictionary(locale);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">{dict.notFound}</h1>
            <p>{dict.pageNotFound}</p>
        </div>
    );
}