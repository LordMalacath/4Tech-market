import { itemData as data } from "../imgData"

export default function ImgSlider() {

    return (
        <div className="imgSlider">
            <div className="imgSlider__swap leftSwap">
                &lArr;
            </div>
            <div className="imgSlider__item">
                <img src={data[0].img} alt={data.tittle} />
            </div>
            <div className="imgSlider__swap rightSwap">
                &rArr;
            </div>
        </div>
    )
};