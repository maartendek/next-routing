import Link from "next/link";

export default function MainHeader() {
    return <header>
        <nav>
        <ul>
            <li key={'home'}><Link href="/">Home</Link></li>
            <li key={'news'}><Link href="/news">News</Link></li>
        </ul>
        </nav>
    </header>
}