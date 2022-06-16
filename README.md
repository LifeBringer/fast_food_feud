# Fast Food Feud

## User Stories
A local startup has asked Site interns to help them construct their new product - `Fast Food Feud`! They love the name and even have a tagline they workshopped: `Folks' Favorite Friendly Fuel Finder For Food Facts`. The one thing they don't have is a working application.

Here's what they have to say about their vision for the mini-app:

> Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! **Fast Food Feud** is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.

They've sourced their nutrition data, bootstrapped a React application, and even hired a designer to creat some styles. However, they quickly realized that they didn't know enough React to make this happen, so they've called on Site to fill in the gaps.

Follow the instructions available on the [course portal](https://courses.codepath.org/courses/summer_internship_for_tech_excellence/unit/2#!lab1)


## Setting up the lab

Make sure to install the proper dependencies.

```bash
npm install
```

Once that's done, run the application like so:

```bash
npm run dev
```

## Objectives
 - How React's component-based design is centered around writing functions that return `JSX`.
 - The way that React enforces a one-way flow of data from parent to child - known as passing `props`.
 - Iteration in `JSX` and how it's used to render lists of items.
 - Strategies used to customize component styles using its `props`.
 - Default `props` and how they can be overridden.
 - The `useState` hook in React and how it's used to manage data that changes - simply called `state`.
 - What event handlers like `onClick` are used for and how they can trigger state changes.
 Conditionally rendering JSX based on `props` or `state` values.
## Application Features
### Core Features
 - [x] Displays the title, tagline description, data source, and instructions in the `Header` and `Instructions` component
 - [x] Categories are displayed in a column and restaurants are displayed in a row.
 - [x] `Chip` component updates based on the restaurant and category selected by the user.
 - [x] When a menu item is selected, the `NutritionalLabel` component is displayed with the nutritional facts of the item.
### Stretch Features
 - [x] Render different instructions messages depending on state
 - [x] Add additional `onClick` handlers to `Chip`
 - [x] Break sections of the `App.jsx` file into their own components (`CategoryColumn.jsx`, `RestaurantsRow.jsx`, `MenuDisplay.jsx`, and `DataSource.jsx`).


### Walkthrough
![2022-06-03 at 2 15 52 - Red Albatross](https://user-images.githubusercontent.com/1930836/171797855-1df861e5-2e98-4674-9afc-0c51df522207.gif)
