import ImgSlider from "./imgSlider/ImgSlider";

export default function LeftSide({ imgCollection }) {

    return (
        <div className='preview__left'>
            <div className='imgContainer'>
                <div className='imgContainer__slider'>
                    <ImgSlider imgCollection={imgCollection} />
                </div>
                {/* <div className='imgContainer__list'>
                    <ImgList imgCollection={imgCollection} />
                </div> */}
            </div>
        </div>
    )
};