import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function BusketBtn() {
    const { badgeCount } = useSelector(state => state.basket);

    return (
        <Link to={"/basket"}>
            <div className='busketBtn'>
                <Badge badgeContent={badgeCount} color={'info'} max={100} >
                    <ShoppingCartIcon fontSize='large' color='primary' />
                </Badge>
            </div>
        </Link>
    )
};
