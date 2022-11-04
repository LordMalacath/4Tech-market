import AddWish from "components/addWish/AddWish";
import BuyBtn from "components/buyBtn/BuyBtn";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function RightSide() {

    return (
        <div className='preview__right'>
            <div className="infoContainer">
                <div className="infoContainer__stock">
                    <CheckCircleOutlineIcon color="success" fontSize="large" />
                    In Stock
                </div>
                <div className="infoContainer__buy buy">
                    <div className="buy__price">100$</div>
                    <BuyBtn />
                    <AddWish />
                </div>
                <div className="infoContainer__description">
                    description
                </div>
            </div>
        </div>
    )
};