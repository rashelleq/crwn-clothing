import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import {
  fetchCategoriesAsync,
  fetchCategoriesStart,
} from '../../store/categories/category.action';

import { useAppDispatch } from '../../store/hooks';

const Shop = () => {
  const dispatch = useAppDispatch();
  dispatch(fetchCategoriesStart());

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCategoriesAsync());
  // }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
