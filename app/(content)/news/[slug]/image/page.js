import { getNewsForSlug } from "@/lib/news";

export default function ImagePage({params}) {
    const newsItemSlug = params.slug;
    const newsItem = getNewsForSlug(params.slug);
    
    if (!newsItem) notFound();

    return <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
}