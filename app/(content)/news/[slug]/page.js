import Link from "next/link";
import { notFound } from "next/navigation";

import { getNewsForSlug } from "@/lib/news";

export default function NewsDetailsPage({ params }) {
  const newsItem = getNewsForSlug(params.slug);

  if (!newsItem) notFound();

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.dateTime}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
