import * as React from "react";
import { Chip } from "../Chip/Chip";

export function CategoriesColumn({
  categories,
  selectCategory,
  selectedCategory,
}) {
  return (
    <div className="CategoriesColumn col">
      <div className="categories options">
        <h2 className="title">Categories</h2>
        {categories.map((category) => {
          return (
            <Chip
              key={category}
              label={category}
              onClick={() => {
                selectedCategory === category
                  ? selectCategory(null)
                  : selectCategory(category);
              }}
              onClose={() => {}}
              isActive={selectedCategory === category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesColumn;
