import IMG from 'img/smartphones/iphone11/37399220.jpg'
import SelectAmount from './components/selectAmount/SelectAmount';
import { useSelector } from 'react-redux';
import DeleteItemBtn from './components/deleteItemBtn/DeleteItemBtn';


export default function OverviewItem({ data }) {
    const { totalPayment } = useSelector(state => state.basket);

    return (
        <div className="overview__item">
            <div className="overview__item__img">
                <img src={IMG} alt="overview" />
            </div>
            <div className="overview__item__name">{data.name}</div>
            <SelectAmount name={data.name} amount={data.amount} />
            <div className="overview__item__total">{totalPayment}$</div>
            <DeleteItemBtn name={data.name} />
        </div>
    )
};