import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crwn.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <>
      <div className='navigation'>
        <Link
          to='/'
          className='logo-container'
        >
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link
            to='/shop'
            className='nav-link'
          >
            Shop
          </Link>
          {currentUser ? (
            <span
              className='nav-link'
              onClick={signOutUser}
            >
              Sign Out
            </span>
          ) : (
            <Link
              to='/auth'
              className='nav-link'
            >
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
