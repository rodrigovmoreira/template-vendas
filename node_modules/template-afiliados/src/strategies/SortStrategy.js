// src/strategies/SortStrategy.js
export const SortAZ = {
  sort: (items) => [...items].sort((a, b) => a.name.localeCompare(b.name))
};

export const SortPriceLow = {
  sort: (items) => [...items].sort((a, b) => a.price - b.price)
};