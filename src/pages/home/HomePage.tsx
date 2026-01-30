import { useMemo, useState } from "react";
import styles from "@pages/home/HomePage.module.scss";
import { Header } from "@widgets/header/Header";
import { CategoriesSidebar } from "@widgets/categories-sidebar/CategoriesSidebar";
import { BooksGrid } from "@widgets/books-grid/BooksGrid";
import { Footer } from "@widgets/footer/Footer";
import { CategoriesSheet } from "@widgets/categories-sheet/CategoriesSheet";
import { BookModal } from "@shared/ui/BookModal/BookModal";
import { books } from "@shared/mock/books";
import type { Book } from "@shared/mock/books";
import { useDebounce } from "@shared/lib/useDebounce";

const normalize = (value: string) => value.trim().toLowerCase();

export const HomePage = () => {
  const [query, setQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [draftFilters, setDraftFilters] = useState<string[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const debouncedQuery = useDebounce(query, 300);
  const normalizedQuery = normalize(debouncedQuery);

  const baseBooks = useMemo(() => {
    if (selectedFilters.length === 0) {
      return books;
    }

    return books.filter((book) =>
      book.genres.some((genre) => selectedFilters.includes(genre))
    );
  }, [selectedFilters]);

  const filteredBooks = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return baseBooks.filter((book) => {
      const haystack = `${book.title} ${book.author} ${book.genres.join(" ")}`;
      return haystack.toLowerCase().includes(normalizedQuery);
    });
  }, [normalizedQuery, baseBooks]);

  const isSearching = normalizedQuery.length > 0;
  const hasResults = filteredBooks.length > 0;

  const toggleFilter = (value: string) => {
    setSelectedFilters((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleDraftFilter = (value: string) => {
    setDraftFilters((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleOpenSheet = () => {
    setDraftFilters(selectedFilters);
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  const handleResetSheet = () => {
    setDraftFilters([]);
  };

  const handleApplySheet = () => {
    setSelectedFilters(draftFilters);
    setIsSheetOpen(false);
  };

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className={styles.page}>
      <Header
        query={query}
        onQueryChange={setQuery}
        onFilterClick={handleOpenSheet}
        hasActiveFilters={selectedFilters.length > 0}
      />
      <main className={styles.layout}>
        <CategoriesSidebar selected={selectedFilters} onToggle={toggleFilter} />
        <div className={styles.content}>
          {isSearching ? (
            hasResults ? (
              <BooksGrid
                title="Результаты"
                books={filteredBooks}
                onBookClick={handleBookClick}
              />
            ) : (
              <section className={styles.emptySection}>
                <h2 className={styles.emptyTitle}>Результаты</h2>
                <div className={styles.emptyState}>
                  <div className={styles.emptyIcon}>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 4.5C5 3.12 6.12 2 7.5 2H19a1 1 0 0 1 1 1v15.5a3.5 3.5 0 0 1-3.5 3.5H7.5A3.5 3.5 0 0 1 4 18.5V6.5C4 5.12 5.12 4 6.5 4H19"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 7.5h8M8 11h6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.emptyHeadline}>Ничего не найдено</p>
                    <p className={styles.emptyText}>
                      Попробуйте изменить запрос или выбрать другую категорию.
                    </p>
                  </div>
                </div>
              </section>
            )
          ) : (
            <>
              <BooksGrid
                title="Рекомендации"
                books={baseBooks.slice(0, 4)}
                onBookClick={handleBookClick}
              />
              <BooksGrid title="Все книги" books={baseBooks} onBookClick={handleBookClick} />
            </>
          )}
        </div>
      </main>
      <Footer />
      <CategoriesSheet
        open={isSheetOpen}
        selected={draftFilters}
        onToggle={toggleDraftFilter}
        onClose={handleCloseSheet}
        onReset={handleResetSheet}
        onApply={handleApplySheet}
      />
      <BookModal book={selectedBook} onClose={handleCloseModal} />
    </div>
  );
};
