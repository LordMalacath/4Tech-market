import AddWish from 'components/addWish/AddWish'
import BuyBtn from 'components/buyBtn/BuyBtn'
import './ItemCardVertical.scss'


export default function ItemCardVertical({ data }) {
    return (
        <div className='itemCardContainer'>
            <div className='itemCardVertical'>
                <div className="itemCardVertical__image">
                    <img src={data.imgURL[0]} alt={data.name} />
                </div>
                <div className="itemCardVertical__name">{data.name}</div>
                <div className="itemCardVertical__price">Price: {data.price}$</div>
                <div className="itemCardVertical__buy">
                    <div>
                        <BuyBtn data={data} />
                        <AddWish />
                    </div>
                </div>
                <div className="itemCardVertical__description">{data.description}</div>
            </div>
        </div>
    )
};