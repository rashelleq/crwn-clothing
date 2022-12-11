import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
  const { setIsCartOpen, cartCount, isCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount as='span'>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
