import * as React from "react";
import { Chip } from "../Chip/Chip";
import { NutritionalLabel } from "../NutritionalLabel/NutritionalLabel";
import "./MenuDisplay.css";

export function MenuDisplay({ menuItems, selectedItem, setSelectedItem }) {
  return (
    <div className="MenuDisplay display">
      <div className="MenuItemButtons menu-items">
        <h2 className="title">Menu Items</h2>
        {menuItems.map((item, i) => {
          return (
            <Chip
              key={i}
              label={item.item_name}
              onClick={() => {
                selectedItem && selectedItem.item_name === item.item_name
                  ? setSelectedItem(null)
                  : setSelectedItem(item);
              }}
              isActive={
                selectedItem && selectedItem.item_name === item.item_name
              }
            />
          );
        })}
      </div>
      {/* NUTRITION FACTS */}
      <div className="NutritionFacts nutrition-facts">
        {" "}
        {selectedItem ? <NutritionalLabel item={selectedItem} /> : null}
      </div>
    </div>
  );
}

export default MenuDisplay;
