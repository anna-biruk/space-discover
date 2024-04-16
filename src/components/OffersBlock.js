import FirstImg from '../assets/1.png';
import SecondImg from '../assets/2.png';
import ThirdImg from '../assets/3.png';
import FourthImg from '../assets/4.png';
import Button from './Button';
import clsx from 'clsx';
import Post from './Post';

// TODO: move to constants
const offers = [{
    title: "Move the borders of reality!",
    subtitle: "Go on a space adventure",
    image: FirstImg
}, {
    title: "Space is not just stars and planets",
    subtitle: "it is a majestic journey to ",
    image: SecondImg
}, {
    title: "For those who dream of stars ",
    subtitle: "Our offer: make your dream come true",
    image: ThirdImg
}, {
    title: "Fulfill your fantastic dreams",
    subtitle: "Space has never been so close",
    image: FourthImg
}];
const OffersBlock = ({ className }) => {
    return (
        <div className={clsx("offers", className)} >
            <h2 className="offers__title">Offers</h2>
            <div className="offers__list">
                {offers.map((item, index) => (
                    <article className={clsx("offer offers__item", {
                        "offer_wide": index % 3 === 0
                    })} key={index} style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%),url(${item.image})` }}>
                        <h3 className='offer__title'>{item.title}</h3>
                        <h4 className='offer__subtitle'>{item.subtitle}</h4>
                        <Button type="secondary">Learn more</Button>
                    </article>
                ))}
            </div>
            <Post />

        </div >
    )
}

export default OffersBlock