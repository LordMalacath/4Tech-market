import basket from 'img/emptyBasket.png'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import './Basket.scss'
import OverviewItem from './components/overviewItem/OverviewItem';
import Checkout from './components/checkout/Checkout';
import { useSelector } from 'react-redux';


export default function Basket() {
    const { basketList } = useSelector(state => state.basket);

    return (
        <div style={{ flex: 5 }}>
            <div className='basket'>
                <span className='basket__title'>Basket</span>
                {basketList.length ?
                    <div className='basket__overview'>
                        <div className='overview'>
                            {basketList?.map(item => <OverviewItem data={item} key={item.name} />)}
                            <div className='overview__footer'>
                                <Checkout />
                            </div>
                        </div>
                    </div>
                    :
                    <div className='basket__empty'>
                        <img src={basket} alt="Empty basket" />
                        <div>
                            Your basket is empty <SentimentVeryDissatisfiedIcon fontSize='inherit' />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
};