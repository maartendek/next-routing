import NewsList from "@/components/news/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

function NewsFilter({year, month}) {
  let links = getAvailableNewsYears();

  if (
    (year && !getAvailableNewsYears(year).includes(+year)) ||
    (month && !getAvailableNewsMonths(year, month).includes(+month))
  ) {
    throw new Error("Invalid filter.");
  }

  if (year) {
    if (month) {
      links = [];
    } else {
      links = getAvailableNewsMonths(year);
    }
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year
              ? `/archive/${year}/${link}`
              : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

function FilteredNews({year, month}) {
  let news;

  if (year) {
    if (month) {
      news = getNewsForYearAndMonth(year, month);
    } else {
      news = getNewsForYear(year);
    }
  }

  let newsContent = <p>No news found for the selected period</p>;

  if (news) newsContent = <NewsList news={news} />;

  return newsContent;
}

export default function ArchiveYearPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <NewsFilter year={selectedYear} month={selectedMonth} />
      <FilteredNews year={selectedYear} month={selectedMonth} />
    </>
  );
}
