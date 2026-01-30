export type Book = {
  id: number;
  title: string;
  author: string;
  genres: string[];
  cover: string;
  releaseDate: string;
  pages: number;
  description: string;
};

export const books: Book[] = [
  {
    id: 1,
    title: "Письма к неизвестному другу",
    author: "Иман Аль-Хуссейн",
    genres: ["Саморазвитие", "Эмоции"],
    cover:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
    releaseDate: "2021",
    pages: 320,
    description:
      "Сборник искренних писем о внутренней силе, поиске гармонии и любви к себе."
  },
  {
    id: 2,
    title: "Тайны старого Востока",
    author: "Салим Нур",
    genres: ["Древний мир", "Восточная философия"],
    cover:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&q=80",
    releaseDate: "2019",
    pages: 280,
    description:
      "Путешествие по древним городам, раскрывающее культурные коды и традиции Востока."
  },
  {
    id: 3,
    title: "Наследие мудрецов",
    author: "Амаль Рашид",
    genres: ["Этика", "Метафизика"],
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    releaseDate: "2020",
    pages: 240,
    description:
      "Размышления о ценностях, выборе и смысле жизни через призму восточной философии."
  },
  {
    id: 4,
    title: "Дороги к свету",
    author: "Лейла Хасан",
    genres: ["Приключения", "Сказки"],
    cover:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=80",
    releaseDate: "2018",
    pages: 192,
    description:
      "Теплые истории о дружбе и путешествиях, которые вдохновляют детей и взрослых."
  },
  {
    id: 5,
    title: "Грани времени",
    author: "Юсуф Карим",
    genres: ["Космос", "Технологии"],
    cover:
      "https://images.unsplash.com/photo-1473862177706-1d38f4f6cc92?auto=format&fit=crop&w=400&q=80",
    releaseDate: "2022",
    pages: 410,
    description:
      "Научно-популярный взгляд на будущее технологий и влияние космических исследований."
  },
  {
    id: 6,
    title: "Путешествие души",
    author: "Хана Саид",
    genres: ["Отношения", "Эмоции"],
    cover:
      "https://images.unsplash.com/photo-1455885666463-4d0e76bc77fc?auto=format&fit=crop&w=400&q=80",
    releaseDate: "2023",
    pages: 275,
    description:
      "История о принятии себя, поддержке близких и поиске внутреннего баланса."
  },
  {
    id: 7,
    title: "Эхо легенд",
    author: "Али Руми",
    genres: ["Средние века", "Современная история"],
    cover:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=400&q=80",
    releaseDate: "2017",
    pages: 360,
    description:
      "Хроника о героях и событиях, оставивших след в истории и культуре региона."
  },
  {
    id: 8,
    title: "Сады света",
    author: "Надия Азиз",
    genres: ["Развитие", "Сказки"],
    cover:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&w=400&q=80",
    releaseDate: "2024",
    pages: 210,
    description:
      "Поэтичные истории, которые помогают открыть в себе уверенность и доброту."
  }
];
