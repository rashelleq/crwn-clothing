//selectors is where you want to transform the data
import { createSelector } from 'reselect';

const selectorCategoryReducer = (state) => {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectorCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
