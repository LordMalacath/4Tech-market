import SelectAmount from './components/selectAmount/SelectAmount';
import DeleteItemBtn from './components/deleteItemBtn/DeleteItemBtn';


export default function OverviewItem({ data }) {

    return (
        <div className="overview__item">
            <div className="overview__item__img">
                <img src={data.imgURL[0]} alt="overview" />
            </div>
            <div className="overview__item__name">{data.name}</div>
            <SelectAmount name={data.name} amount={data.amount} />
            <div className="overview__item__total">{data.amount * data.price}$</div>
            <DeleteItemBtn name={data.name} />
        </div>
    )
};