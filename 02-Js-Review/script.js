const inputdata = document.getElementById("inputdata");
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

// console.log("Title:", title);
// console.log("Spanish Title:", spanishTitle);
// console.log("Author:", author);
// for (let i = 0; i < genres.length; i++) {
//   console.log(genres[i]);
// }
// console.log("Goodreads Rating:", goodreadsRating);
// console.log("LibraryThing Rating:", librarythingRating);

// //tempalate literals

// const summary = `${title} is a book written by ${author}. It belongs to the genres of ${genres.join(", ")}. The book has received a rating of ${goodreadsRating} on Goodreads and ${librarythingRating} on LibraryThing. The Spanish title of the book is "${spanishTitle}".`;

// console.log(summary);

// //ternary operators

// const isGood = goodreadsRating > 4.5 ? "Yes" : "No";
// console.log("Is the book good?", isGood);

// //traditional function
// function getYear(str) {
//   return str.split("-")[0];
// }

// console.log(getYear(book.published));

// //Arrow function argument (i.e (str)) , arrow (=>) and what we want to return (str.split("-")[0])
// const getYearArrow = (str) => str.split("-")[0];

// console.log(getYearArrow(book.published));

// Cart management
let cart = [];
const PRICE_PER_BOOK = 19.99;

// Display book details by book name
const resultsContainer = document.getElementById("results");

function displayBooks(books) {
  if (books.length === 0) {
    resultsContainer.innerHTML = '<div class="no-results">No books found</div>';
    return;
  }

  resultsContainer.innerHTML = books
    .map(
      (book) => `
    <div class="book-card">
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Published:</strong> ${book.published}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Spanish Title:</strong> ${book.translations.spanish}</p>
      <p><strong>French Title:</strong> ${book.translations.french}</p>
      <p><strong>Goodreads Rating:</strong> ${book.reviews.goodreads.rating} (${book.reviews.goodreads.ratingsCount} ratings)</p>
      <p><strong>LibraryThing Rating:</strong> ${book.reviews.librarything.rating} (${book.reviews.librarything.ratingsCount} ratings)</p>
      <div class="genres">
        ${book.genres.map((genre) => `<span class="genre-tag">${genre}</span>`).join("")}
      </div>
      <button class="cart-btn" onclick="addtoCart(${book.id})">Add to Cart - $${PRICE_PER_BOOK.toFixed(2)}</button>
    </div>
  `,
    )
    .join("");
}

// Display all books on initial load
displayBooks(data);

// Search functionality
inputdata.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const searchResults = data.filter((book) =>
    book.title.toLowerCase().includes(searchValue),
  );
  displayBooks(searchResults);
});

// Modal functions
function openAddBookModal() {
  document.getElementById("addBookModal").style.display = "block";
}

function closeAddBookModal() {
  document.getElementById("addBookModal").style.display = "none";
  document.getElementById("addBookForm").reset();
}

// Close modal when clicking outside
window.onclick = function (event) {
  const addBookModal = document.getElementById("addBookModal");
  const cartModal = document.getElementById("cartModal");

  if (event.target === addBookModal) {
    closeAddBookModal();
  }

  if (event.target === cartModal) {
    closeCartModal();
  }
};

// Form submission handler
document.getElementById("addBookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const published = document.getElementById("published").value;
  const pages = parseInt(document.getElementById("pages").value);
  const genres = document
    .getElementById("genres")
    .value.split(",")
    .map((g) => g.trim());
  const spanish = document.getElementById("spanish").value;
  const french = document.getElementById("french").value;
  const goodreadsRating = parseFloat(
    document.getElementById("goodreadsRating").value,
  );
  const librarythingRating = parseFloat(
    document.getElementById("librarythingRating").value,
  );

  // Create book object
  const newBook = {
    title,
    author,
    published,
    pages,
    genres,
    hasMovieAdaptation: false,
    translations: {
      spanish,
      french,
      urdu: "",
    },
    reviews: {
      goodreads: {
        rating: goodreadsRating,
        ratingsCount: 0,
        reviewsCount: 0,
      },
      librarything: {
        rating: librarythingRating,
        ratingsCount: 0,
        reviewsCount: 0,
      },
    },
  };

  addbook(newBook);
  closeAddBookModal();
});

function addbook(newbook) {
  const lastBook = data[data.length - 1];
  const newId = lastBook ? lastBook.id + 1 : 1;
  const bookToAdd = { id: newId, ...newbook };
  data.push(bookToAdd);
  displayBooks(data);
  console.log("Book added successfully:", bookToAdd);
}

function addtoCart(bookId) {
  const book = getBookById(bookId);

  if (!book) {
    alert("Book not found!");
    return;
  }

  // Check if book already in cart
  const existingItem = cart.find((item) => item.id === bookId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: book.id,
      title: book.title,
      author: book.author,
      price: PRICE_PER_BOOK,
      quantity: 1,
    });
  }

  updateCartCount();
  console.log("Book added to cart:", book.title);
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = totalItems;
}

function openCartModal() {
  const cartModal = document.getElementById("cartModal");
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalDiv = document.getElementById("cartTotal");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<div class="cart-empty">Your cart is empty</div>';
    cartTotalDiv.style.display = "none";
    cartModal.style.display = "block";
    return;
  }

  let totalPrice = 0;
  cartItemsContainer.innerHTML = cart
    .map((item) => {
      const itemTotal = item.price * item.quantity;
      totalPrice += itemTotal;
      return `
      <div class="cart-item">
        <div>
          <h4>${item.title}</h4>
          <p><strong>Author:</strong> ${item.author}</p>
          <p><strong>Price:</strong> $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}</p>
        </div>
        <div class="cart-item-actions">
          <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    `;
    })
    .join("");

  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
  cartTotalDiv.style.display = "block";
  cartModal.style.display = "block";
}

function closeCartModal() {
  document.getElementById("cartModal").style.display = "none";
}

function removeFromCart(bookId) {
  cart = cart.filter((item) => item.id !== bookId);
  updateCartCount();

  if (cart.length === 0) {
    document.getElementById("cartItems").innerHTML =
      '<div class="cart-empty">Your cart is empty</div>';
    document.getElementById("cartTotal").style.display = "none";
  } else {
    openCartModal(); // Refresh the cart display
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const booksList = cart
    .map((item) => `${item.title} (x${item.quantity})`)
    .join("\n");

  alert(
    `Order Summary:\n\n${booksList}\n\nTotal: $${totalPrice.toFixed(2)}\n\nThank you for your purchase!`,
  );

  cart = [];
  updateCartCount();
  closeCartModal();
  document.getElementById("cartItems").innerHTML =
    '<div class="cart-empty">Your cart is empty</div>';
  document.getElementById("cartTotal").style.display = "none";
}
