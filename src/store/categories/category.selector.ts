//selectors is where you want to transform the data
import { createSelector } from 'reselect';
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

const selectorCategoryReducer = (state): CategoriesState => {
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
    }, {} as CategoryMap);
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectorCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
