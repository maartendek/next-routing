import NewsList from "@/components/news/news-list";

export default async function NewsOverviewPage() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) throw new Error("Failed to get news.");

  const news = await response.json();

  return (
    <div id="news">
      <h1>Next.js News</h1>
      <NewsList news={news} />
    </div>
  );
}
