import { useState } from "react";
import styles from "@widgets/categories-sheet/CategoriesSheet.module.scss";
import { categories } from "@shared/mock/categories";
import { Button } from "@shared/ui/Button/Button";

type CategoriesSheetProps = {
  open: boolean;
  selected: string[];
  onToggle: (value: string) => void;
  onClose: () => void;
  onReset: () => void;
  onApply: () => void;
};

export const CategoriesSheet = ({
  open,
  selected,
  onToggle,
  onClose,
  onReset,
  onApply
}: CategoriesSheetProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  if (!open) {
    return null;
  }

  const handleToggleGroup = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.sheet} role="dialog" aria-modal="true">
        <div className={styles.header}>
          <h2>Категории</h2>
          <button className={styles.close} type="button" onClick={onClose}>
            Закрыть
          </button>
        </div>
        <div className={styles.content}>
          {categories.map((category, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div key={category.title} className={styles.group}>
                <button
                  className={styles.groupButton}
                  type="button"
                  onClick={() => handleToggleGroup(index)}
                >
                  <span>{category.title}</span>
                  <span className={styles.chevron} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className={styles.groupContent}>
                    {category.items.map((item) => (
                      <label key={item} className={styles.checkbox}>
                        <input
                          type="checkbox"
                          checked={selected.includes(item)}
                          onChange={() => onToggle(item)}
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.footer}>
          <Button variant="ghost" onClick={onReset}>
            Сбросить
          </Button>
          <Button onClick={onApply}>Подтвердить</Button>
        </div>
      </div>
    </div>
  );
};
