import img from 'img/pexels-azamat-esenaliev-119550.jpg';
import './mainPage.scss'

export default function MainPage() {
    return (
        <div style={{ flex: 5 }}>
            <div className='main'>
                <img src={img} alt='Main page' />
                <div className='main__title'>
                    Explore the world
                </div>
            </div>
        </div>
    )
};
