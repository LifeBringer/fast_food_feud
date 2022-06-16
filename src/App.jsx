import * as React from "react";
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Instructions } from "./components/Instructions/Instructions";
import { NutritionalLabel } from "./components/NutritionalLabel/NutritionalLabel";
import { CategoriesColumn } from "./components/CategoriesColumn/CategoriesColumn";
import { RestaurantsRow } from "./components/RestaurantsRow/RestaurantsRow";
import { MenuDisplay } from "./components/MenuDisplay/MenuDisplay";
import { DataSource } from "./components/DataSource/DataSource";

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
};
// or this!
const { data, categories, restaurants } = createDataSet();

export function App() {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const selectCategory = (category) => {
    setSelectedItem(null);
    setSelectedCategory(category);
  };

  const selectRestaurant = (restaurant) => {
    setSelectedItem(null);
    setSelectedRestaurant(restaurant);
  };

  const currentMenuItems = data.filter((item) => {
    return (
      item.food_category === selectedCategory &&
      item.restaurant === selectedRestaurant
    );
  });

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <CategoriesColumn
        categories={categories}
        selectCategory={selectCategory}
        selectedCategory={selectedCategory}
      />

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header
          title={appInfo.title}
          tagline={appInfo.tagline}
          description={appInfo.description}
        />

        {/* RESTAURANTS ROW */}
        <RestaurantsRow
          restaurants={restaurants}
          selectRestaurant={selectRestaurant}
          selectedRestaurant={selectedRestaurant}
        />

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={appInfo.instructions.start} />

        {/* MENU DISPLAY */}
        <MenuDisplay
          menuItems={currentMenuItems}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />

        {/* DATA SOURCE */}
        <DataSource appInfo={appInfo} />
        
      </div>
    </main>
  );
}

export default App;
