import Rocket from '../assets/rocket.png'
const Footer = () => {
    return (
        <footer className='footer'>
            <img className='footer__img' src={Rocket} alt="rocket" />
            <div className='footer__text'>Exciting space adventure!</div>
        </footer>
    )
}

export default Footer