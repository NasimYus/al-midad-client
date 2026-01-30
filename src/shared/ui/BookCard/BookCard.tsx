import styles from "@shared/ui/BookCard/BookCard.module.scss";

export type BookCardProps = {
  title: string;
  author: string;
  genres: string[];
  cover: string;
  onClick?: () => void;
};

export const BookCard = ({ title, author, genres, cover, onClick }: BookCardProps) => {
  return (
    <article className={styles.card} onClick={onClick} role="button" tabIndex={0}>
      <img className={styles.cover} src={cover} alt={title} loading="lazy" />
      <div className={styles.meta}>
        <span className={styles.genres}>{genres.join(" · ")}</span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.author}>{author}</span>
      </div>
    </article>
  );
};
