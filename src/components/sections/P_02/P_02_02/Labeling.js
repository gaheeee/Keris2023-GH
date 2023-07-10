import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import { useState } from 'react';


export default function Labeling({ img1, img2, img3, prop_grey, prop_blue }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleImageClick = (imageName) => {
        setSelectedImage(imageName);
    };
    const handleNextClick = () => {
        if (selectedImage === "img1") {
            window.location.href = prop_blue;
        } else if (selectedImage === "img2" || selectedImage === "img3") {
            setShowModal(true);
        } else {
            alert('사진을 선택해주세요 !');
            return;
        }
    };
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="label-space">
                <div
                    className={`img1 ${selectedImage === 'img1' ? 'selected' : ''}`}
                    onClick={() => handleImageClick('img1')}
                >
                    <img src={img1} alt="img1" />
                </div>
                <div
                    className={`img2 ${selectedImage === 'img2' ? 'selected' : ''}`}
                    onClick={() => handleImageClick('img2')}
                >
                    <img src={img2} alt="img2" />
                </div>
                <div
                    className={`img3 ${selectedImage === 'img3' ? 'selected' : ''}`}
                    onClick={() => handleImageClick('img3')}
                >
                    <img src={img3} alt="img3" />
                </div>

            </div>
            <div className="main-btn">
                <GreyBtn to={prop_grey} />
                <BlueBtn onClick={handleNextClick}>다음 단계로</BlueBtn>
            </div>


            {showModal && (
                <div className="modal">
                    <h3>다시 선택해보세요 !</h3>
                    <button onClick={closeModal}>닫기</button>
                </div>
            )}

        </div>

    );
}