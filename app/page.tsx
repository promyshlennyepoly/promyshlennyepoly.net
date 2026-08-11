import Link from "next/link";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "./site-chrome";

const articles = [
  {
    href: "/blog/podgotovka-osnovaniya",
    number: "01",
    tag: "Технология",
    title: "Подготовка основания под промышленный бетонный пол",
    text: "От оценки грунта и уплотнения подушки до гидроизоляции и армирования — разбираем этапы, от которых зависит ресурс пола.",
  },
  {
    href: "/blog/topping-ili-polimer",
    number: "02",
    tag: "Выбор покрытия",
    title: "Топпинг или полимер: что выбрать для производства",
    text: "Сравниваем решения по нагрузкам, срокам устройства, ремонту и условиям эксплуатации без рекламных обещаний.",
  },
  {
    href: "/blog/ukhod-i-remont",
    number: "03",
    tag: "Эксплуатация",
    title: "Уход и ремонт промышленных полов",
    text: "Практический регламент уборки, осмотров и локального ремонта, который помогает дольше сохранить ровную рабочую поверхность.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Независимый отраслевой блог · Беларусь</p>
            <h1>Промышленные бетонные полы без лишних слов</h1>
            <p className="hero-lead">
              Пишем о проектировании, устройстве и эксплуатации бетонных полов
              для складов, производств, паркингов и логистических комплексов.
            </p>
            <div className="hero-actions">
              <Link className="button" href="#articles">Читать материалы</Link>
              <a className="text-link" href="#about">О блоге <span>↘</span></a>
            </div>
          </div>
          <div className="hero-visual site-image">
            <Image src="/images/hero-floor.jpg" alt="Готовый промышленный бетонный пол в логистическом комплексе" fill priority sizes="(max-width: 800px) 100vw, 46vw" />
          </div>
        </section>

        <section className="fact-strip">
          <div className="shell facts">
            <div><strong>20–30 лет</strong><span>потенциальный срок службы</span></div>
            <div><strong>5 этапов</strong><span>от основания до защиты швов</span></div>
            <div><strong>1 система</strong><span>грунт, плита и покрытие работают вместе</span></div>
          </div>
        </section>

        <section className="section shell" id="about">
          <div className="section-heading two-col-heading">
            <div>
              <p className="eyebrow">О проекте</p>
              <h2>Пол — часть технологии здания</h2>
            </div>
            <p>
              Ошибки в основании, бетоне, швах или уходе проявляются не сразу,
              но дорого обходятся в эксплуатации. Мы собираем понятные материалы,
              которые помогают заказчику задавать правильные вопросы до начала работ.
            </p>
          </div>
          <div className="principles">
            <article><span>01</span><h3>Практично</h3><p>Объясняем, как решения влияют на ежедневную работу объекта.</p></article>
            <article><span>02</span><h3>По существу</h3><p>Разбираем технологию, причины дефектов и критерии выбора.</p></article>
            <article><span>03</span><h3>С учётом климата</h3><p>Учитываем белорусские зимы, влагу и перепады температур.</p></article>
          </div>
        </section>

        <section className="section articles-section" id="articles">
          <div className="shell">
            <div className="section-heading heading-row">
              <div><p className="eyebrow">База знаний</p><h2>Свежие материалы</h2></div>
              <span className="issue">Выпуск 01 / 2026</span>
            </div>
            <div className="article-list">
              {articles.map((article) => (
                <Link className="article-card" href={article.href} key={article.href}>
                  <span className="article-number">{article.number}</span>
                  <div><p className="article-tag">{article.tag}</p><h3>{article.title}</h3><p>{article.text}</p></div>
                  <span className="article-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell checklist">
          <div className="site-image wide-placeholder">
            <Image src="/images/concrete-installation.jpg" alt="Устройство промышленной бетонной плиты в производственном здании" fill sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
          <div className="checklist-copy">
            <p className="eyebrow">Перед стартом работ</p>
            <h2>Что должно быть в техническом задании</h2>
            <ul>
              <li><span>01</span>Нагрузки от стеллажей, техники и оборудования</li>
              <li><span>02</span>Требования к ровности и беспыльности</li>
              <li><span>03</span>Температурный и влажностный режим</li>
              <li><span>04</span>Химические воздействия и режим уборки</li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
