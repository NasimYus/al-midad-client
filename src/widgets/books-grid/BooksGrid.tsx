import styles from "@widgets/books-grid/BooksGrid.module.scss";
import { BookCard } from "@shared/ui/BookCard/BookCard";
import type { Book } from "@shared/mock/books";

type BooksGridProps = {
  title: string;
  books: Book[];
  onBookClick?: (book: Book) => void;
};

export const BooksGrid = ({ title, books, onBookClick }: BooksGridProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            genres={book.genres}
            cover={book.cover}
            onClick={() => onBookClick?.(book)}
          />
        ))}
      </div>
    </section>
  );
};
