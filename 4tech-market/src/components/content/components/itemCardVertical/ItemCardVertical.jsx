import AddWish from 'components/addWish/AddWish'
import BuyBtn from 'components/buyBtn/BuyBtn'
import { useLocalStorage } from 'hooks/useLocalStorage'
import { useLocalStorageSubscriber } from 'hooks/useLocalStorageSubscriber'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setItem } from 'redux/slices/itemSlice'
import './ItemCardVertical.scss'


export default function ItemCardVertical({ data }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lastViewedItem = useLocalStorageSubscriber("lastViewedItem");
    // eslint-disable-next-line no-unused-vars
    const [_, setLocalStorageLastViewedItem] = useLocalStorage("lastViewedItem", lastViewedItem);
    const handleClick = () => {
        setLocalStorageLastViewedItem(data.name);
        dispatch(setItem(data));
        navigate(`/item/${data.name}`);
    };
    const description = data.description.split("//")

    return (
        <div className='itemCardContainer'>
            <div className='itemCardVertical'>
                <div className="itemCardVertical__image">
                    <img
                        src={data.imgURL[0]}
                        alt={data.name}
                        onClick={handleClick}
                    />
                </div>
                <div className="itemCardVertical__name">{data.name}</div>
                <div className="itemCardVertical__price">Price: {data.price}$</div>
                <div className="itemCardVertical__buy">
                    <div>
                        <BuyBtn data={data} />
                        <AddWish />
                    </div>
                </div>
                <div className="itemCardVertical__description">
                    {description.map((item, index) => <p key={index}>{item}</p>)}
                </div>
            </div>
        </div>
    )
};