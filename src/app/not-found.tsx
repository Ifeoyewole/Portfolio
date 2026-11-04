import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="shell interior-page not-found">
      <p className="eyebrow">404 / LOST IN ORBIT</p>
      <h1 className="page-title">WRONG<br/><em>COORDINATES.</em></h1>
      <p className="page-intro">This page isn't in this part of the universe.</p>
      <Link href="/" className="button button-primary">Return home ↗</Link>
    </main>
  );
}

