import styles from "@shared/ui/BookModal/BookModal.module.scss";
import { Button } from "@shared/ui/Button/Button";
import type { Book } from "@shared/mock/books";

type BookModalProps = {
  book: Book | null;
  onClose: () => void;
};

export const BookModal = ({ book, onClose }: BookModalProps) => {
  if (!book) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} role="dialog" aria-modal="true">
        <button className={styles.close} type="button" onClick={onClose}>
          Закрыть
        </button>
        <div className={styles.content}>
          <img className={styles.cover} src={book.cover} alt={book.title} />
          <div className={styles.info}>
            <span className={styles.genres}>{book.genres.join(" · ")}</span>
            <h2 className={styles.title}>{book.title}</h2>
            <p className={styles.author}>{book.author}</p>
            <div className={styles.meta}>
              <div>
                <span className={styles.metaLabel}>Дата выхода</span>
                <span className={styles.metaValue}>{book.releaseDate}</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Объем</span>
                <span className={styles.metaValue}>{book.pages} стр.</span>
              </div>
            </div>
            <p className={styles.description}>{book.description}</p>
            <div className={styles.actions}>
              <Button>Скачать</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileActions}>
        <Button>Скачать</Button>
      </div>
    </div>
  );
};
