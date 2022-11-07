import { useState } from "react"

export default function ImgSlider({ imgCollection }) {
    const [index, setIndex] = useState(0);
    const prevImage = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1);
        } else
            if (index === 0) {
                setIndex(imgCollection.length - 1);
            }
    };
    const nextImage = () => {
        if (index + 1 < imgCollection.length) {
            setIndex(index + 1);
        } else
            if (index + 1 === imgCollection.length) {
                setIndex(0);
            }
    };

    return (
        <div className="imgSlider">
            <div className="imgSlider__swap leftSwap"
                onClick={prevImage}
            >
                &lArr;
            </div>
            <div className="imgSlider__item">
                <img
                    src={imgCollection[index]}
                    alt={"itemPreview"}

                />
            </div>
            <div className="imgSlider__swap rightSwap"
                onClick={nextImage}
            >
                &rArr;
            </div>
        </div>
    )
};