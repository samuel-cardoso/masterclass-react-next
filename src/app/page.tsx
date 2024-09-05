import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Masterclass Next</h1>
      <nav>
        <Link href="/temp">Temp</Link>
      </nav>
    </div>
  );
}
