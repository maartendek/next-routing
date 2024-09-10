import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news/news-list";

export default function NewsOverviewPage() {
  return (
    <div id="news">
      <h1>Next.js News</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
}
