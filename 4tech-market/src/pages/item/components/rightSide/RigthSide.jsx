import AddWish from "components/addWish/AddWish";
import BuyBtn from "components/buyBtn/BuyBtn";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function RightSide({ item }) {
    const description = item.description.split("//")

    return (
        <div className='preview__right'>
            <div className="infoContainer">
                <div className="infoContainer__stock">
                    <CheckCircleOutlineIcon color="success" fontSize="large" />
                    In Stock
                </div>
                <div className="infoContainer__buy buy">
                    <div className="buy__price">{item.price}$</div>
                    <BuyBtn data={item} />
                    <AddWish />
                </div>
                <div className="infoContainer__description">
                    {description.map((item, index) =>
                        <p key={index}>{item}</p>
                    )}
                </div>
            </div>
        </div>
    )
};