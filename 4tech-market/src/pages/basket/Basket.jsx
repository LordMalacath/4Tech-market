import basket from 'img/emptyBasket.png'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import OverviewItem from './components/overviewItem/OverviewItem';
import Checkout from './components/checkout/Checkout';
import { useDispatch, useSelector } from 'react-redux';
import LoadingProgress from 'components/loadingProgress/LoadingProgress';
import './Basket.scss'
import { setTotalPayment } from 'redux/slices/basketSlice';


export default function Basket() {
    const { basketList, loading } = useSelector(state => state.basket);
    const dispatch = useDispatch();
    dispatch(setTotalPayment())

    return (
        <div style={{ flex: 5 }}>
            <LoadingProgress loadingStatus={loading}>
                <div className='basket'>
                    <span className='basket__title'>Basket</span>
                    {basketList.length ?
                        <div className='basket__overview'>
                            <div className='overview'>
                                {basketList?.map((item, index) =>
                                    <OverviewItem data={item} key={index} />
                                )}
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
            </LoadingProgress>
        </div>
    )
};