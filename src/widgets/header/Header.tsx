import type { ChangeEvent } from "react";
import styles from "@widgets/header/Header.module.scss";
import { Input } from "@shared/ui/Input/Input";
import { Button } from "@shared/ui/Button/Button";

type HeaderProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onFilterClick: () => void;
  hasActiveFilters: boolean;
};

export const Header = ({
  query,
  onQueryChange,
  onFilterClick,
  hasActiveFilters
}: HeaderProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoBlock}>
        <span className={styles.logo}>Al-Midad</span>
        <span className={styles.subtitle}>Книжный каталог</span>
      </div>
      <div className={styles.actions}>
        <Input
          placeholder="Поиск по книгам"
          value={query}
          onChange={handleChange}
        />
        <div className={styles.filterWrapper}>
          <Button className={styles.filterButton} variant="ghost" onClick={onFilterClick}>
            Фильтр
          </Button>
          {hasActiveFilters && <span className={styles.filterBadge} />}
        </div>
      </div>
    </header>
  );
};
