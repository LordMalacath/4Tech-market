import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useState } from 'react';
import './AddWish.scss'

export default function AddWish() {
    const [wish, setWish] = useState(false);

    const handleClick = () => {
        setWish(!wish)
    }

    return (
        <button onClick={handleClick} className="addWish">
            {!wish ? <FavoriteBorderOutlinedIcon /> : <FavoriteOutlinedIcon />}
        </button>
    )
};