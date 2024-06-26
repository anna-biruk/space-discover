import React from 'react';

import clsx from 'clsx';
import { ReactComponent as CartIcon } from '../assets/cart.svg';

const links = [{
    label: 'Home',
    href: '#'
}, {
    label: 'Products',
    href: '#products'
}, {
    label: <CartIcon />,
    href: '#cart'
}]
const Navigation = ({ className }) => {
    return (
        <nav className={clsx("navigation", className)}>
            <ul className="navigation__list">
                {links.map((item, index) => (
                    <li className="navigation__item" key={index}>
                        <a href={item.href} className="navigation__link">{item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation