import * as React from "react";
import { Chip } from "../Chip/Chip";

export function RestaurantsRow({
  restaurants,
  selectRestaurant,
  selectedRestaurant,
}) {
  return (
    <div className="RestaurantsRow">
      <h2 className="title">Restaurants</h2>
      <div className="restaurants options">
        {restaurants.map((restaurant) => {
          return (
            <Chip
              key={restaurant}
              label={restaurant}
              onClick={() => {
                selectedRestaurant === restaurant
                  ? selectRestaurant(null)
                  : selectRestaurant(restaurant);
              }}
              isActive={selectedRestaurant === restaurant}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantsRow;
