import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
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
              onClick={signOutHandler}
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
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
