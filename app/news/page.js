import Link from "next/link";

export default function NewsOverviewPage() {
    return (
      <div id="news">
        <h1>Next.js News</h1>
        <ul>
            <li key={'a'}><Link href="/news/news-1">News 1</Link></li>
            <li key={'b'}><Link href="/news/news-2">News 2</Link></li>
        </ul>
      </div>
    );
  }
  