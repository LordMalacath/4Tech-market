import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { setItemAmount, setTotalPayment } from 'redux/slices/basketSlice';


export default function SelectAmount({ name, amount }) {
    const dispatch = useDispatch();
    const increaseAmount = () => {
        dispatch(setItemAmount({ name, increment: 1 }));
        dispatch(setTotalPayment());
    };
    const decreaseAmount = () => {
        dispatch(setItemAmount({ name, increment: -1 }));
        dispatch(setTotalPayment());
    };

    return (
        <div className="overview__item__select">
            <button
                className="decrease"
                onClick={decreaseAmount}
            >
                <RemoveIcon fontSize='inherit' />
            </button>
            <span>{amount}</span>
            <button
                className="increase"
                onClick={increaseAmount}
            >
                <AddIcon fontSize='inherit' />
            </button>
        </div>
    )
};