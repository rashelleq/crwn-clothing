import { useContext } from 'react';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import {
  ProductCardContainer,
  ProductCardFooter,
  Name,
  Price,
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemtoCart } = useContext(CartContext);

  const addProductToCart = () => addItemtoCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </ProductCardFooter>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
