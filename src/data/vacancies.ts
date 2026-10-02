export interface Vacancy {
  title: string;
  requirements: string[];
}

export interface Category {
  id: string;
  title: string;
  tone: 'primary' | 'secondary' | 'tertiary';
  vacancies: Vacancy[];
}

export const categories: Category[] = [
  {
    id: 'development',
    title: 'Разработка',
    tone: 'primary',
    vacancies: [
      {
        title: 'Разработчик GUI',
        requirements: ['Qt, GTK или AvaloniaUI', 'Опыт от 1 месяца', 'C, Vala, C++, Rust, QML или C#'],
      },
      {
        title: 'Разработчик экосистемы Tulpar и APG',
        requirements: ['C, Go', 'Понимание философии Unix'],
      },
      {
        title: 'Разработчик Omnia Kernel',
        requirements: ['Понимание устройства ядра Linux', 'C, ASM', 'Опыт работы с драйверами'],
      },
      {
        title: 'Разработчик базовых утилит дистрибутива',
        requirements: ['C, C++, Rust, Go или Pascal', 'Понимание философии Unix'],
      },
      {
        title: 'Разработчик DevOps-утилит',
        requirements: ['Опыт создания CLI-утилит', 'Компилируемые языки', 'Понимание нужд разработчиков'],
      },
      {
        title: 'Разработчик Avalonia.Adwaita',
        requirements: ['C#, .NET', 'Понимание концепции Adwaita'],
      },
    ],
  },
  {
    id: 'packaging',
    title: 'Сборка и инфраструктура',
    tone: 'secondary',
    vacancies: [
      {
        title: 'Сборщик пакетов',
        requirements: ['Понимание стандартов', 'Базовые знания Unix', 'Умение компилировать'],
      },
      {
        title: 'Разработчик автосборщика пакетов',
        requirements: ['C, C++ или Rust', 'Понимание спецификации APG'],
      },
      {
        title: 'Инженер CI/CD',
        requirements: ['Понимание CI/CD', 'GitHub Actions'],
      },
    ],
  },
  {
    id: 'quality',
    title: 'Качество',
    tone: 'tertiary',
    vacancies: [
      {
        title: 'Тестировщик',
        requirements: ['Внимательность к деталям', 'Проверка функциональности', 'Умение описывать проблемы'],
      },
      {
        title: 'QA-специалист',
        requirements: ['Системное мышление', 'Опыт использования Linux', 'Поиск несоответствий'],
      },
      {
        title: 'Аналитик обратной связи',
        requirements: ['Работа с отзывами пользователей', 'Категоризация проблем'],
      },
    ],
  },
  {
    id: 'management',
    title: 'Управление',
    tone: 'primary',
    vacancies: [
      {
        title: 'Координатор (maintainer) DE',
        requirements: ['Лидерские навыки', 'Понимание устройства DE', 'Эмпатия желательна'],
      },
      {
        title: 'Менеджер задач',
        requirements: ['Организованность', 'Приоритизация задач', 'Базовое понимание разработки'],
      },
    ],
  },
  {
    id: 'docs',
    title: 'Документация и переводы',
    tone: 'secondary',
    vacancies: [
      {
        title: 'Технический писатель',
        requirements: ['Умение объяснять сложное просто', 'Markdown, reStructuredText'],
      },
      {
        title: 'Переводчик',
        requirements: ['Английский и ещё один язык, кроме русского'],
      },
      {
        title: 'Редактор Telegram-канала',
        requirements: ['Грамотная речь', 'Умение писать в стиле NurOS'],
      },
    ],
  },
  {
    id: 'community',
    title: 'Сообщество и продвижение',
    tone: 'tertiary',
    vacancies: [
      {
        title: 'Маркетолог',
        requirements: ['Креативность', 'Понимание аудитории поколения Z'],
      },
      {
        title: 'SMM-менеджер',
        requirements: ['Ведение аккаунта в TikTok', 'Привлечение людей в сообщество'],
      },
      {
        title: 'Генератор идей',
        requirements: ['Базовые навыки разработки', 'Понимание задач системного администратора'],
      },
    ],
  },
];

export const vacancyCount = categories.reduce((sum, category) => sum + category.vacancies.length, 0);
