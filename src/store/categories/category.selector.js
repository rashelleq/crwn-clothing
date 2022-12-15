//selectors is where you want to transform the data
import { createSelector } from 'reselect';

const selectorCategoryReducer = (state) => {
  console.log('selector 1 fired');
  return state.categories;
};

export const selectCategories = createSelector(
  [selectorCategoryReducer],
  (categoriesSlice) => {
    console.log('selector 2 fired');
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log('selector 3 fired');

    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
