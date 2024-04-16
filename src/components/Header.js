import Logo from '../assets/logo.svg';
import BurgerMenu from './BurgerMenu';
import Navigation from './Navigation';

const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={Logo} alt="logo" />
                <Navigation className="header__navigation" />
                <BurgerMenu className="header__burger-menu" />

            </div>
        </header>
    )
}

export default Header;