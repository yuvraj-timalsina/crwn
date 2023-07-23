import { ReactComponent as ShoppingCartIcon } from '../../assets/cart.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingCartIcon className='cart-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};
export default CartIcon;
