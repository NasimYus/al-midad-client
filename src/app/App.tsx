import styles from "@app/App.module.scss";
import { HomePage } from "@pages/home/HomePage";

export const App = () => {
  return (
    <div className={styles.app}>
      <HomePage />
    </div>
  );
};
