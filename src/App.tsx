import React from 'react';

const advantages = [
  'Практика на учебных станках и моделях производственных линий',
  'Преподаватели с опытом работы на промышленных предприятиях',
  'Поддержка при трудоустройстве после завершения курса',
  'Удобный формат: вечерние группы и занятия по выходным',
];

const modules = [
  { title: 'Основы профессии', hours: 24, details: 'Техника безопасности, материалы, виды станков и производственных линий.' },
  { title: 'Устройство и наладка оборудования', hours: 32, details: 'Подготовка оборудования к работе, настройка режимов и контроль параметров.' },
  { title: 'Работа на автоматических и полуавтоматических станках', hours: 40, details: 'Пошаговая отработка рабочих операций на реальных кейсах.' },
  { title: 'Контроль качества и диагностика', hours: 24, details: 'Выявление брака, причины неисправностей и методы устранения отклонений.' },
  { title: 'Итоговая практика и аттестация', hours: 24, details: 'Сдача итогового задания, подготовка к выходу на производство.' },
];

const stats = [
  { label: 'Длительность', value: '144 часа' },
  { label: 'Стоимость', value: '74 000 ₽' },
  { label: 'Старт потока', value: 'Каждый месяц' },
  { label: 'Формат', value: 'Очный + практика' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
          <p className="text-lg font-bold tracking-wide">Учебный центр «ПромПрофОбраз»</p>
          <a
            href="#enroll"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Подать заявку
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-16">
          <p className="mb-4 inline-block rounded-full border border-emerald-500/50 px-3 py-1 text-xs text-emerald-300">
            Профессиональная переподготовка
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
            Оператор автоматических и полуавтоматических станков и линий станков
          </h1>
          <p className="mt-6 max-w-3xl text-slate-300">
            Освойте востребованную рабочую профессию и получите документ установленного образца.
            Программа подходит для начинающих и для специалистов, которым нужно повысить квалификацию.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-2 text-xl font-bold text-emerald-300">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-2xl font-bold">Что вы получите после обучения</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {advantages.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-slate-200">
                ✓ {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Программа курса (144 часа)</h2>
          <div className="mt-6 space-y-4">
            {modules.map((module) => (
              <article key={module.title} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{module.title}</h3>
                  <span className="rounded-md bg-slate-800 px-3 py-1 text-sm text-emerald-300">{module.hours} ч.</span>
                </div>
                <p className="mt-3 text-slate-300">{module.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6">
          <div className="rounded-2xl border border-emerald-700/30 bg-emerald-900/20 p-6 md:p-8">
            <h2 className="text-2xl font-bold">Стоимость обучения — 74 000 руб.</h2>
            <p className="mt-3 text-slate-200">
              Возможна оплата в 2 этапа без переплат. Для корпоративных клиентов действует специальное предложение
              при наборе группы от 5 человек.
            </p>
          </div>
        </section>

        <section id="enroll" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Оставить заявку</h2>
          <p className="mt-2 text-slate-300">Менеджер свяжется с вами в течение рабочего дня.</p>
          <form className="mt-6 grid gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 md:grid-cols-2">
            <input className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3" type="text" placeholder="Ваше имя" />
            <input className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3" type="tel" placeholder="Телефон" />
            <input className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 md:col-span-2" type="email" placeholder="E-mail" />
            <button className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 md:col-span-2" type="button">
              Отправить заявку
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-400">
          <p>© 2026 Учебный центр «ПромПрофОбраз»</p>
          <p className="mt-1">г. Москва, ул. Производственная, д. 15 · +7 (495) 123-45-67 · info@promprofobraz.ru</p>
        </div>
      </footer>
    </div>
  );
}
