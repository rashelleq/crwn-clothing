import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemtoCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemtoCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          <ArrowBackIosNewIcon />
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          <ArrowForwardIosIcon />
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        <ClearIcon />
      </div>
    </div>
  );
};

export default CheckoutItem;
