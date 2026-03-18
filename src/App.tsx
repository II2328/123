import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Settings, 
  Clock, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  ChevronRight, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToForm = () => {
    document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                ПРОФ<span className="text-blue-600">МАСТЕР</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">О профессии</a>
              <a href="#program" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Программа</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Стоимость</a>
              <div className="flex items-center gap-4 ml-4 border-l border-slate-200 pl-8">
                <a href="tel:+78000000000" className="text-sm font-bold text-slate-900">8 (800) 000-00-00</a>
                <button 
                  onClick={scrollToForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                  Записаться
                </button>
              </div>
            </div>

            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-lg">
            <a href="#about" className="block text-base font-medium text-slate-600 py-2" onClick={() => setIsMenuOpen(false)}>О профессии</a>
            <a href="#program" className="block text-base font-medium text-slate-600 py-2" onClick={() => setIsMenuOpen(false)}>Программа</a>
            <a href="#pricing" className="block text-base font-medium text-slate-600 py-2" onClick={() => setIsMenuOpen(false)}>Стоимость</a>
            <div className="pt-4 border-t border-slate-100">
              <a href="tel:+78000000000" className="block text-lg font-bold text-slate-900 mb-4">8 (800) 000-00-00</a>
              <button 
                onClick={() => { scrollToForm(); setIsMenuOpen(false); }}
                className="w-full bg-blue-600 text-white px-5 py-3 rounded-xl text-base font-medium"
              >
                Записаться на курс
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/manufacturing/1920/1080" 
            alt="Производственная линия" 
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/95 to-slate-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Идет набор в группу
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
            >
              Обучение профессии: <br/>
              <span className="text-blue-600">Оператор автоматических и полуавтоматических станков</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
            >
              Получите востребованную специальность для работы на современных производственных линиях. Официальное свидетельство, практика на реальном оборудовании и помощь в трудоустройстве.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={scrollToForm}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
              >
                Записаться на курс
                <ChevronRight className="w-5 h-5" />
              </button>
              <a 
                href="#program"
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl text-lg font-medium transition-all flex items-center justify-center"
              >
                Смотреть программу
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200/60"
            >
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">144</div>
                <div className="text-sm text-slate-500 font-medium">академических часа</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">74 000 ₽</div>
                <div className="text-sm text-slate-500 font-medium">полная стоимость</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-slate-900 mb-1">Документ</div>
                <div className="text-sm text-slate-500 font-medium">гос. образца</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Profession */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Почему стоит выбрать эту профессию?
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Оператор автоматических и полуавтоматических станков и линий — это ключевой специалист на современном производстве. От его квалификации зависит качество выпускаемой продукции и бесперебойная работа дорогостоящего оборудования.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
                    title: "Высокий спрос на рынке труда",
                    desc: "Промышленные предприятия постоянно нуждаются в квалифицированных кадрах для работы на новых линиях."
                  },
                  {
                    icon: <Award className="w-6 h-6 text-blue-600" />,
                    title: "Достойная заработная плата",
                    desc: "Специалисты по автоматическим линиям получают зарплату выше среднего по производственному сектою."
                  },
                  {
                    icon: <Settings className="w-6 h-6 text-amber-600" />,
                    title: "Работа с современными технологиями",
                    desc: "Управление высокотехнологичным оборудованием, программирование и контроль автоматизированных процессов."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/cnc-machine/800/1000" 
                  alt="Работа за станком" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    100%
                  </div>
                  <div className="font-bold text-slate-900">Практическая направленность</div>
                </div>
                <p className="text-sm text-slate-500">Обучение построено на реальных производственных задачах</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Программа обучения</h2>
            <p className="text-lg text-slate-600">
              Курс рассчитан на 144 академических часа и включает в себя как теоретическую базу, так и интенсивную практику.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                hours: "24 часа",
                title: "Основы материаловедения и технические измерения",
                topics: ["Свойства металлов и сплавов", "Система допусков и посадок", "Работа с контрольно-измерительными приборами"]
              },
              {
                hours: "32 часа",
                title: "Чтение чертежей и технической документации",
                topics: ["Основы машиностроительного черчения", "Чтение кинематических схем", "Технологическая документация"]
              },
              {
                hours: "40 часов",
                title: "Устройство и принцип работы станков и линий",
                topics: ["Кинематика автоматических станков", "Гидравлические и пневматические системы", "Устройство ЧПУ и контроллеров"]
              },
              {
                hours: "48 часов",
                title: "Практическое обучение и наладка",
                topics: ["Установка и выверка деталей", "Настройка режимов резания", "Подналадка оборудования в процессе работы", "Техника безопасности"]
              }
            ].map((module, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 font-semibold text-sm rounded-lg mb-4">
                  Модуль {idx + 1} • {module.hours}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{module.title}</h3>
                <ul className="space-y-3">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Form */}
      <section id="pricing" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Стоимость и условия</h2>
              <p className="text-slate-300 text-lg mb-8">
                Инвестируйте в свое будущее. Профессия оператора станков окупается уже в первый месяц работы.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-8">
                <div className="text-slate-300 font-medium mb-2">Полный курс (144 часа)</div>
                <div className="text-5xl font-extrabold text-white mb-6">74 000 ₽</div>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Теоретические занятия с преподавателями-практиками",
                    "Практика на действующем производстве",
                    "Все необходимые учебные материалы",
                    "Сдача квалификационного экзамена",
                    "Выдача свидетельства установленного образца"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Возможна рассрочка</h4>
                    <p className="text-sm text-slate-300">Оплачивайте обучение частями без переплат и скрытых комиссий.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="enroll-form" className="bg-white rounded-3xl p-8 shadow-2xl text-slate-900">
              <h3 className="text-2xl font-bold mb-2">Оставить заявку</h3>
              <p className="text-slate-500 mb-8">Заполните форму, и наш менеджер свяжется с вами для уточнения деталей.</p>
              
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.'); }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">ФИО</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                    placeholder="Иванов Иван Иванович"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email (необязательно)</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
                    placeholder="example@mail.ru"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors mt-4"
                >
                  Отправить заявку
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-1.5 rounded-lg">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight text-white">
                  ПРОФ<span className="text-blue-500">МАСТЕР</span>
                </span>
              </div>
              <p className="text-sm mb-4">
                Лицензированный учебный центр дополнительного профессионального образования.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Контакты</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                  <a href="tel:+78000000000" className="hover:text-white transition-colors">8 (800) 000-00-00</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                  <a href="mailto:info@prof-master.ru" className="hover:text-white transition-colors">info@prof-master.ru</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 shrink-0" />
                  <span>г. Москва, ул. Производственная, д. 1, офис 101</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Документы</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Лицензия на образовательную деятельность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Договор оферты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сведения об образовательной организации</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Учебный центр «ПРОФ-МАСТЕР». Все права защищены.</p>
            <p>Не является публичной офертой.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
