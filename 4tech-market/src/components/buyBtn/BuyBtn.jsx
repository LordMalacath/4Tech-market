import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useLocalStorageSubscriber } from 'hooks/useLocalStorageSubscriber';
import { useDispatch } from 'react-redux';
import { setBadgeCount, setItemIntoBusket } from 'redux/slices/basketSlice';
import './BuyBtn.scss'

export default function BuyBtn({ data }) {
    const dispatch = useDispatch();
    const basketData = useLocalStorageSubscriber("basket", []);
    const [localStorageBasket, setLocalStorageBasket] = useLocalStorage("basket", basketData);
    const handleClick = () => {
        const itemExist = localStorageBasket.find(item => item.name === data.name);
        if (!itemExist) {
            setLocalStorageBasket(prev => [...prev, { name: data.name, amount: 1 }])
        }
        dispatch(setItemIntoBusket({ name: data.name, amount: 1 }));
        dispatch(setBadgeCount());
    }

    return (
        <button className="buyBtn" onClick={handleClick}>
            <ShoppingCartCheckoutIcon />
            Buy
        </button>
    )
};