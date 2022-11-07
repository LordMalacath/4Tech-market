import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusketItems } from 'redux/slices/basketSlice';
import './BuyBtn.scss'


export default function BuyBtn({ data }) {
    const { basketList } = useSelector(store => store.basket);
    const dispatch = useDispatch();

    const handleClick = () => {
        const itemExist = basketList.find(item => item.name === data.name);
        if (!itemExist) {
            dispatch(fetchBusketItems({ name: data.name, amount: 1 }));
        }
    }

    return (
        <button className="buyBtn" onClick={handleClick}>
            <ShoppingCartCheckoutIcon />
            Buy
        </button>
    )
};