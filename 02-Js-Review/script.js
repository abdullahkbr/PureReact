const data = [
  {
    id: 1,
    title: "what is react",
    published: "2024-06-01",
    author: "abdullah",

    genres: ["programming", "javascript", "frontend", "library"],
    hasMovieAdaptation: true,
    pages: 300,

    translations: {
      spanish: "¿qué es react?",
      french: "qu'est-ce que react?",
      urdu: "ری ایکٹ کیا ہے؟",
    },

    reviews: {
      goodreads: {
        rating: 4.5,
        ratingsCount: 1000,
        reviewsCount: 200,
      },
      librarything: {
        rating: 4.0,
        ratingsCount: 500,
        reviewsCount: 100,
      },
    },
  },

  {
    id: 2,
    title: "what is Javascript",
    published: "2024-06-01",
    author: "abdullah",

    genres: ["programming", "javascript", "frontend", "library"],
    hasMovieAdaptation: true,
    pages: 300,

    translations: {
      spanish: "¿qué es javascript?",
      french: "qu'est-ce que javascript?",
      urdu: "جیوا اسکرپٹ کیا ہے؟",
    },

    reviews: {
      goodreads: {
        rating: 5.0,
        ratingsCount: 1000,
        reviewsCount: 200,
      },
      librarything: {
        rating: 4.5,
        ratingsCount: 500,
        reviewsCount: 100,
      },
    },
  },

  {
    id: 3,
    title: "Mastering React Hooks",
    published: "2024-07-15",
    author: "Sarah Johnson",

    genres: ["programming", "react", "javascript", "advanced"],
    hasMovieAdaptation: false,
    pages: 425,

    translations: {
      spanish: "Dominando React Hooks",
      french: "Maîtriser React Hooks",
      urdu: "ری ایکٹ ہوکس میں مہارت",
    },

    reviews: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 1500,
        reviewsCount: 300,
      },
      librarything: {
        rating: 4.6,
        ratingsCount: 800,
        reviewsCount: 150,
      },
    },
  },

  {
    id: 4,
    title: "CSS Grid and Flexbox Guide",
    published: "2024-08-20",
    author: "Mike Chen",

    genres: ["programming", "css", "frontend", "design"],
    hasMovieAdaptation: false,
    pages: 350,

    translations: {
      spanish: "Guía de CSS Grid y Flexbox",
      french: "Guide CSS Grid et Flexbox",
      urdu: "سی ایس ایس گرڈ اور فلیکس باکس گائیڈ",
    },

    reviews: {
      goodreads: {
        rating: 4.8,
        ratingsCount: 2000,
        reviewsCount: 400,
      },
      librarything: {
        rating: 4.7,
        ratingsCount: 1200,
        reviewsCount: 250,
      },
    },
  },

  {
    id: 5,
    title: "Node.js Best Practices",
    published: "2024-09-10",
    author: "Emma Williams",

    genres: ["programming", "nodejs", "backend", "architecture"],
    hasMovieAdaptation: false,
    pages: 500,

    translations: {
      spanish: "Mejores Prácticas de Node.js",
      french: "Meilleures Pratiques Node.js",
      urdu: "نوڈ جے ایس بہترین طریقے",
    },

    reviews: {
      goodreads: {
        rating: 4.6,
        ratingsCount: 1200,
        reviewsCount: 250,
      },
      librarything: {
        rating: 4.4,
        ratingsCount: 600,
        reviewsCount: 120,
      },
    },
  },

  {
    id: 6,
    title: "Web Performance Optimization",
    published: "2024-10-05",
    author: "David Martinez",

    genres: ["programming", "performance", "frontend", "optimization"],
    hasMovieAdaptation: false,
    pages: 380,

    translations: {
      spanish: "Optimización del Rendimiento Web",
      french: "Optimisation des Performances Web",
      urdu: "ویب کی کارکردگی میں بہتری",
    },

    reviews: {
      goodreads: {
        rating: 4.5,
        ratingsCount: 900,
        reviewsCount: 180,
      },
      librarything: {
        rating: 4.3,
        ratingsCount: 500,
        reviewsCount: 90,
      },
    },
  },

  {
    id: 7,
    title: "TypeScript Advanced Patterns",
    published: "2024-11-12",
    author: "Lisa Anderson",

    genres: ["programming", "typescript", "patterns", "advanced"],
    hasMovieAdaptation: false,
    pages: 450,

    translations: {
      spanish: "Patrones Avanzados de TypeScript",
      french: "Modèles Avancés TypeScript",
      urdu: "ٹائپ اسکرپٹ ایڈوانسڈ پیٹرنز",
    },

    reviews: {
      goodreads: {
        rating: 4.9,
        ratingsCount: 1800,
        reviewsCount: 350,
      },
      librarything: {
        rating: 4.8,
        ratingsCount: 1000,
        reviewsCount: 200,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBookById(id) {
  return data.find((book) => book.id === id);
}

const book = getBookById(2);
// const title = book.title;
// const spanishTitle = book.translations.spanish;
// const author = book.author;
// const genres = book.genres;
// const goodreadsRating = book.reviews.goodreads.rating;
// const librarythingRating = book.reviews.librarything.rating;

const {
  title,
  translations: { spanish: spanishTitle },
  author,
  genres,
  reviews: {
    goodreads: { rating: goodreadsRating },
    librarything: { rating: librarythingRating },
  },
} = book;

console.log("Title:", title);
console.log("Spanish Title:", spanishTitle);
console.log("Author:", author);
for (let i = 0; i < genres.length; i++) {
  console.log(genres[i]);
}
console.log("Goodreads Rating:", goodreadsRating);
console.log("LibraryThing Rating:", librarythingRating);
