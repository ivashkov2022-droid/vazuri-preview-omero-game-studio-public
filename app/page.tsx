"use client";

import Image from "next/image";
import { FormEvent, PointerEvent as ReactPointerEvent, useEffect, useState } from "react";

export default function Home() {
  const [briefOpen, setBriefOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    let opened = false;
    const onScroll = () => {
      const services = document.getElementById("services");
      const trigger = services ? services.offsetTop - window.innerHeight * 0.12 : window.innerHeight * 1.9;
      if (!opened && window.scrollY > trigger) {
        opened = true;
        setBriefOpen(true);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setBriefOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const openBrief = () => {
    setSent(false);
    setBriefOpen(true);
  };

  const submitBrief = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const moveHero = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--world-x", `${x * -16}px`);
    event.currentTarget.style.setProperty("--world-y", `${y * -10}px`);
    event.currentTarget.style.setProperty("--model-x", `${x * 23}px`);
    event.currentTarget.style.setProperty("--model-y", `${y * 12}px`);
  };

  const resetHero = (event: ReactPointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--world-x", "0px");
    event.currentTarget.style.setProperty("--world-y", "0px");
    event.currentTarget.style.setProperty("--model-x", "0px");
    event.currentTarget.style.setProperty("--model-y", "0px");
  };

  return (
    <main>
      <section className="game-hero" id="home" onPointerMove={moveHero} onPointerLeave={resetHero}>
        <div className="hero-world" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-vignette" />
        <header className="game-header">
          <a className="game-brand" href="#home" aria-label="Rift — на главную">
            <span className="brand-shard">R</span>
            <strong>RIFT</strong>
            <small>indie game studio</small>
          </a>
          <nav aria-label="Основная навигация">
            <a href="#about">Студия</a>
            <a href="#games">Игры</a>
            <a href="#services">Разработка</a>
            <a href="#contacts">Контакты</a>
          </nav>
          <button className="header-cta" type="button" onClick={openBrief}>Обсудить проект <span>↗</span></button>
        </header>

        <h1 className="hero-title"><span>Worlds</span><span>begin</span><span>here</span></h1>
        <div className="hero-model-stage">
          <div className="hero-model-glow" aria-hidden="true" />
          <model-viewer
            class="rift-model"
            src="/models/rift-explorer-v2.glb"
            alt="Интерактивная 3D-модель исследователя мира Rift"
            loading="eager"
            camera-controls=""
            auto-rotate=""
            auto-rotate-delay="0"
            rotation-per-second="14deg"
            camera-orbit="12deg 78deg 4m"
            field-of-view="26deg"
            min-camera-orbit="auto 62deg 4m"
            max-camera-orbit="auto 94deg 4m"
            disable-zoom=""
            disable-pan=""
            interaction-prompt="none"
            touch-action="pan-y"
            shadow-intensity="1.6"
            shadow-softness=".8"
            exposure="1.2"
            tone-mapping="aces"
          />
          <span className="model-hint"><b>↔</b> Зажмите и вращайте</span>
        </div>
        <div className="hero-control">
          <a className="play-button" href="#about"><i>▶</i><span>О студии</span></a>
          <div className="hero-note"><b>Новая вселенная</b><p>Сюжетная action-RPG<br />для PC и консолей</p></div>
        </div>
        <div className="hero-status"><span>RIFT // MOSCOW</span><span>UNREAL ENGINE 5</span><span>BUILD 04.26</span></div>
        <a className="hero-scroll" href="#about" aria-label="Перейти к следующему экрану">↓</a>
      </section>

      <section className="about" id="about">
        <div className="about-index"><span>01</span><span>Кто мы</span><span>Independent since 2019</span></div>
        <div className="about-grid">
          <div className="about-visual">
            <div className="studio-photo"><Image src="/images/studio.jpg" alt="Команда игровой студии за работой" fill sizes="(max-width: 720px) 100vw, 42vw" /></div>
            <div className="pixel-orbit orbit-one" />
            <div className="pixel-orbit orbit-two" />
            <div className="level-badge"><b>27</b><span>людей<br />в команде</span></div>
          </div>
          <div className="about-copy">
            <p className="game-kicker"><span>✦</span> Студия полного цикла</p>
            <h2>СОБИРАЕМ<br />МИРЫ ИЗ<br /><em>ИДЕЙ</em></h2>
            <p className="about-lead">RIFT — независимая команда художников, сценаристов и разработчиков. Мы превращаем сильную игровую механику в мир, который хочется исследовать.</p>
            <div className="about-stats">
              <article><strong>03</strong><span>собственных<br />IP в разработке</span></article>
              <article><strong>12</strong><span>наград за арт<br />и нарратив</span></article>
              <article><strong>08</strong><span>лет среднего<br />опыта команды</span></article>
            </div>
            <a className="slash-link" href="#services">Как мы работаем <span>{"///"}</span></a>
          </div>
        </div>
        <div className="about-word" aria-hidden="true">RIFT</div>
      </section>

      <section className="services" id="services">
        <div className="services-art" id="games">
          <Image src="/images/rift-hero.png" alt="Игровой мир Rift" fill sizes="(max-width: 720px) 100vw, 38vw" />
          <div className="art-mask" />
          <div className="game-card">
            <small>IN DEVELOPMENT · 2026</small>
            <h3>NULL<br />CITADEL</h3>
            <p>Action RPG · PC / PS5 / Xbox</p>
            <a href="#contacts">О проекте ↗</a>
          </div>
        </div>
        <div className="services-panel">
          <p className="game-kicker light"><span>✦</span> Что мы делаем</p>
          <h2>GAME ART &<br /><em>DEVELOPMENT</em></h2>
          <div className="service-list">
            <article><span>01</span><div><h3>Game development</h3><p>Прототип, архитектура, gameplay и production под PC и консоли.</p></div><b>↗</b></article>
            <article><span>02</span><div><h3>Art direction</h3><p>Визуальный язык, персонажи, окружение и полный 3D-пайплайн.</p></div><b>↗</b></article>
            <article><span>03</span><div><h3>Animation & VFX</h3><p>Живое движение, эффекты и кинематографичные игровые сцены.</p></div><b>↗</b></article>
          </div>
          <button className="project-button" type="button" onClick={openBrief}>Запустить проект <span>→</span></button>
        </div>
        <footer id="contacts">
          <a className="game-brand footer-game-brand" href="#home"><span className="brand-shard">R</span><strong>RIFT</strong><small>indie game studio</small></a>
          <p>hello@rift-studio.ru · +7 495 010-48-48</p>
          <p>Москва · Нижняя Сыромятническая, 10 <small className="model-credit">3D: Neil Armstrong Spacesuit · Smithsonian</small></p>
        </footer>
      </section>

      {briefOpen && (
        <div className="brief-layer" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setBriefOpen(false);
        }}>
          <section className="brief-card" role="dialog" aria-modal="true" aria-labelledby="brief-title">
            <button className="brief-close" type="button" onClick={() => setBriefOpen(false)} aria-label="Закрыть">×</button>
            <div className="brief-side"><span>RIFT // PROJECT</span><strong>LET&apos;S BUILD<br /><em>A WORLD</em></strong><small>Ответим в течение рабочего дня</small></div>
            <div className="brief-body">
              {!sent ? (
                <>
                  <p className="game-kicker"><span>✦</span> Новый проект</p>
                  <h2 id="brief-title">РАССКАЖИТЕ<br /><em>ОБ ИДЕЕ</em></h2>
                  <form onSubmit={submitBrief}>
                    <label>Имя<input name="name" autoComplete="name" placeholder="Как к вам обращаться" required /></label>
                    <label>Почта или Telegram<input name="contact" placeholder="name@company.ru / @username" required /></label>
                    <label>Задача<select name="project" defaultValue="game"><option value="game">Разработка игры</option><option value="art">Game art / 3D</option><option value="vfx">Animation / VFX</option><option value="other">Другое</option></select></label>
                    <button className="project-button submit-project" type="submit">Отправить бриф <span>→</span></button>
                    <small>Отправляя форму, вы соглашаетесь на обработку персональных данных.</small>
                  </form>
                </>
              ) : (
                <div className="brief-success" aria-live="polite"><i>✓</i><p className="game-kicker"><span>✦</span> Принято</p><h2>ВЫХОДИМ<br /><em>НА СВЯЗЬ</em></h2><p>Посмотрим вводные и ответим вам в течение рабочего дня.</p><button className="slash-link" type="button" onClick={() => setBriefOpen(false)}>Вернуться в игру ///</button></div>
              )}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
