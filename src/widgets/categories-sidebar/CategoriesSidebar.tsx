import { useState } from "react";
import styles from "@widgets/categories-sidebar/CategoriesSidebar.module.scss";
import { categories } from "@shared/mock/categories";

type CategoriesSidebarProps = {
  selected: string[];
  onToggle: (value: string) => void;
};

export const CategoriesSidebar = ({ selected, onToggle }: CategoriesSidebarProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const handleToggleGroup = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Категории</h2>
      <div className={styles.groups}>
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
    </aside>
  );
};
