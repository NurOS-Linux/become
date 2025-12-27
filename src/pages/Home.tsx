import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface Vacancy {
  emoji: string;
  title: string;
  requirements: string[];
}

const vacancies: Vacancy[] = [
  {
    emoji: '📊',
    title: 'Разработчик GUI',
    requirements: ['Qt / GTK / AvaloniaUI', 'Опыт: от 1 месяца', 'ЯП: C, Vala, C++, Rust, QML, C#'],
  },
  {
    emoji: '🐎',
    title: 'Разработчик и помощник разработчиков экосистемы Tulpar и APG',
    requirements: ['ЯП: C, Go', 'Понимание Unix философии'],
  },
  {
    emoji: '🌐',
    title: 'Переводчик',
    requirements: ['Знание английского и второго языка (не русского)'],
  },
  {
    emoji: '🔝',
    title: 'Координатор (Maintainer) DE',
    requirements: ['Эмпатия (желательно)', 'Лидерские навыки', 'Понимание структуры DE'],
  },
  {
    emoji: '🧑‍💻',
    title: 'Разработчик Omnia Kernel (форк Linux)',
    requirements: ['Понимание работы ядра', 'C, ASM', 'Навыки работы с драйверами'],
  },
  {
    emoji: '🏷',
    title: 'Разработчик креативных маркетинговых решений',
    requirements: ['Богатая фантазия', '"На одной волне" с поколением Z'],
  },
  {
    emoji: '💡',
    title: 'Генератор идей',
    requirements: ['Базовые навыки разработки', 'Понимание задач системного администратора'],
  },
  {
    emoji: '😎',
    title: "SMM'щик",
    requirements: ['Умение вести TikTok аккаунт', 'Завлечение людей в сообщество'],
  },
  {
    emoji: '✍️',
    title: 'Редактор постов Telegram-канала',
    requirements: ['Понимание и перенимание стиля NurOS', 'Владение грамотной речью и лёгким лирическим вайбом'],
  },
  {
    emoji: '🔄',
    title: 'Автоматизатор CI/CD',
    requirements: ['Понимание CI/CD', 'Знания GitHub Actions'],
  },
  {
    emoji: '🔗',
    title: 'Разработчик базовых утилит дистрибутива',
    requirements: ['Знание компилируемых языков (C, C++, Rust, Go, Pascal)', 'Понимание философии Unix'],
  },
  {
    emoji: '🧰',
    title: 'Разработчик DevOps утилит',
    requirements: ['Опыт создания CLI-утилит', 'Знание компилируемых языков', 'Понимание нужд разработчиков'],
  },
  {
    emoji: '⌨️',
    title: 'Техписатель документации',
    requirements: ['Умение объяснять сложное просто', 'Markdown, reStructuredText'],
  },
  {
    emoji: '🧪',
    title: 'Тестировщик',
    requirements: ['Внимательность к деталям', 'Готовность проверять функционал', 'Умение описывать проблемы'],
  },
  {
    emoji: '📄',
    title: 'Менеджер задач (Issue tracker)',
    requirements: ['Организованность', 'Умение приоритизировать задачи', 'Базовое понимание разработки'],
  },
  {
    emoji: '🔍',
    title: 'QA-специалист',
    requirements: ['Системное мышление', 'Опыт использования Linux', 'Готовность искать несоответствия'],
  },
  {
    emoji: '📊',
    title: 'Аналитик обратной связи',
    requirements: ['Работа с отзывами пользователей', 'Навыки категоризации проблем'],
  },
  {
    emoji: '🛍',
    title: 'Сборщик пакетов',
    requirements: ['Понимание стандартов', 'Минимальные UNIX знания', 'Уметь компилировать'],
  },
  {
    emoji: '⚙️',
    title: 'Разработчик автосборщика пакетов',
    requirements: ['Языки системной разработки (C, C++, Rust)', 'Понимание спецификации APG'],
  },
  {
    emoji: '😀',
    title: 'Разработчик Avalonia.Adwaita',
    requirements: ['Знание C# и dotnet', 'Понимание концепции Adwaita'],
  },
];

const Home: FC = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo">
          <span className="logo-text">NurOS <span className="logo-accent">Become</span></span>
        </Link>
        <Link to="/apply" className="nav-cta">
          Подать заявку
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          Присоединяйся к команде{' '}
          <span className="gradient-text">NurOS</span>
        </h1>
        <p className="hero-subtitle">
          Мы создаём современную операционную систему и ищем талантливых людей.
          Открытый исходный код, дружное сообщество и интересные задачи.
        </p>
        <div className="hero-cta">
          <Link to="/apply" className="btn-primary">
            Подать заявку →
          </Link>
          <a href="#vacancies" className="btn-secondary">
            Смотреть вакансии
          </a>
          <a href="https://nuros.org" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Больше о проекте ↗
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-value">20</div>
            <div className="stat-label">Открытых позиций</div>
          </div>
          <div className="stat">
            <div className="stat-value">100%</div>
            <div className="stat-label">Open Source</div>
          </div>
          <div className="stat">
            <div className="stat-value">∞</div>
            <div className="stat-label">Печенек</div>
          </div>
        </div>
      </section>

      {/* Vacancies Section */}
      <section className="vacancies-section" id="vacancies">
        <div className="section-header">
          <span className="section-tag">Вакансии</span>
          <h2>Открытые позиции</h2>
          <p>Найди роль, которая подходит именно тебе</p>
        </div>
        <div className="vacancy-grid">
          {vacancies.map((vacancy, index) => (
            <div key={index} className="vacancy-card">
              <span className="vacancy-number">#{String(index + 1).padStart(2, '0')}</span>
              <span className="vacancy-emoji">{vacancy.emoji}</span>
              <h3>{vacancy.title}</h3>
              <ul className="vacancy-requirements">
                {vacancy.requirements.map((req, reqIndex) => (
                  <li key={reqIndex}>{req}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-card">
          <div className="info-emoji">🍪</div>
          <h3>Зарплата? Печеньками!</h3>
          <p>
            NurOS — это полностью некоммерческий проект. Мы работаем ради идеи,
            опыта и удовольствия от создания чего-то крутого вместе.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Готов присоединиться?</h2>
        <p>Заполни заявку и стань частью команды NurOS</p>
        <Link to="/apply" className="btn-primary">
          Подать заявку →
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2025 <a href="https://nuros.org" target="_blank" rel="noopener noreferrer">NurOS</a>.
          Лицензия AGPL-3.0.
        </p>
      </footer>
    </div>
  );
};

export default Home;
