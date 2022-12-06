import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

//filter:
//          .filter((_, idx) => idx < 4)
//get rid of products that do not have index < 4 / only show index < 4
const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title'>{title.toUpperCase()}</span>
      </h2>

      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
