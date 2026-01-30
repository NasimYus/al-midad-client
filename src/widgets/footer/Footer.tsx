import styles from "@widgets/footer/Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3 className={styles.title}>О нас</h3>
        <p className={styles.text}>
          Al-Midad — платформа для поиска и чтения вдохновляющих книг.
        </p>
      </div>
      <div>
        <h3 className={styles.title}>Контакты</h3>
        <p className={styles.text}>support@al-midad.com</p>
      </div>
      <div>
        <h3 className={styles.title}>Соцсети</h3>
        <p className={styles.text}>Telegram · Instagram · YouTube</p>
      </div>
    </footer>
  );
};
