import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="logo" href="/" aria-label="Промышленные полы — главная">
          <span className="logo-mark">ПП</span>
          <span>Промышленные<br />полы</span>
        </Link>
        <nav aria-label="Главная навигация">
          <Link href="/#articles">Статьи</Link>
          <Link href="/#about">О блоге</Link>
          <a href="mailto:info@promyshlennyepoly.net">Написать нам</a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div><div className="footer-logo">Промышленные полы</div><p>Практический блог о бетонных полах в Беларуси.</p></div>
        <div><span>Навигация</span><Link href="/">Главная</Link><Link href="/#articles">Все статьи</Link></div>
        <div><span>Связаться</span><a href="mailto:info@promyshlennyepoly.net">info@promyshlennyepoly.net</a><p>Минск, Беларусь</p></div>
      </div>
      <div className="shell copyright">© 2026 promyshlennyepoly.net · Материалы носят информационный характер</div>
    </footer>
  );
}
