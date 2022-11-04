import ImgList from "./imgList/Imglist";
import ImgSlider from "./imgSlider/ImgSlider";

export default function LeftSide() {

    return (
        <div className='preview__left'>
            <div className='imgContainer'>
                <div className='imgContainer__slider'>
                    <ImgSlider />
                </div>
                <div className='imgContainer__list'>
                    <ImgList />
                </div>
            </div>
        </div>
    )
};