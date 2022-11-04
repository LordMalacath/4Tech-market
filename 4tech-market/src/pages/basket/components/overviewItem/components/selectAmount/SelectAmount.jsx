import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { setItemAmount } from 'redux/slices/basketSlice';


export default function SelectAmount({ name, amount }) {
    const dispatch = useDispatch()

    return (
        <div className="overview__item__select">
            <button
                className="decrease"
                onClick={() => dispatch(setItemAmount({ name, increment: -1 }))}
            >
                <RemoveIcon fontSize='inherit' />
            </button>
            <span>{amount}</span>
            <button
                className="increase"
                onClick={() => dispatch(setItemAmount({ name, increment: 1 }))}
            >
                <AddIcon fontSize='inherit' />
            </button>
        </div>
    )
};