import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeItemFromBasket, setBadgeCount, setTotalPayment } from 'redux/slices/basketSlice';


export default function DeleteItemBtn({ name }) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(removeItemFromBasket(name));
        dispatch(setBadgeCount());
        dispatch(setTotalPayment());
    }

    return (
        <button
            className="overview__item__delete"
            onClick={handleClick}
        >
            <DeleteIcon fontSize='large' />
        </button>
    )
};