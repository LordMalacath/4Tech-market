import BusketBtn from './components/busketBtn/BusketBtn'
import HeaderNav from './components/headerNav/HeaderNav'
import LoginBtn from './components/loginBtn/LoginBtn'
import Logo from './components/logo/Logo'
import { Link } from 'react-router-dom'
import './header.scss'
import { signOut } from 'firebase/auth'
import { auth } from 'api/firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { removeLoggedUser } from 'redux/slices/authSlice'

export default function Header() {
    const { user } = useSelector(state => state.loggedUser);
    const dispatch = useDispatch();
    const handleClick = async () => {
        await signOut(auth);
        dispatch(removeLoggedUser())
    }

    return (
        <header>
            <div className='header__leftSide'>
                <Link to="/">
                    <Logo />
                </Link>
                <HeaderNav />
            </div>
            <div className='header__rightSide'>
                {user ?
                    <button onClick={handleClick}>Logout</button>
                    :
                    <LoginBtn />}
                {user ? <span>{user.name}</span> : ""}
                <BusketBtn />
            </div>
        </header>
    )
};
