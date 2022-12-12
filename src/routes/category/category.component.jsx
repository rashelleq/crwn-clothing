import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoryContainer, CategoryTitle } from './category.styles.jsx';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  //if you have components that rely on async code, will need a safety net in case not available
  //only render component if data is present
  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
