import { ReactComponent as BurgerMenuIcon } from '../assets/burger.svg';
import { ReactComponent as CloseIcon } from '../assets/close-icon.svg';
import Navigation from './Navigation';
import clsx from 'clsx';

const BurgerMenu = ({ className }) => {

    return (
        <div className={clsx("burger-menu", className)}>
            <input type="checkbox" className="burger-menu__checkbox" id="burger-menu" />
            <label htmlFor="burger-menu" className="burger-menu__label">
                <BurgerMenuIcon className="burger-menu__icon" />
                <CloseIcon className='burger-menu__icon_close' />
            </label>
            <Navigation className="burger-menu__sidebar" />
        </div>
    )
}

export default BurgerMenu;