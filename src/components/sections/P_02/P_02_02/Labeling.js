import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import { useState } from 'react';


export default function Labeling({ img1, img2, img3, answer, fail1, fail2, prop_grey, prop_blue }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleImageClick = (imageName) => {
        setSelectedImage(imageName);
    };

    const handleNextClick = () => {
        if (selectedImage === answer) {
            window.location.href = prop_blue;
        } else if (selectedImage === fail1 || selectedImage === fail2) {
            setModalMessage("다시 선택해보세요 !");
            setShowModal(true);
        } else {
            setModalMessage("사진을 선택해주세요 !");
            setShowModal(true);
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
                    <h3>{modalMessage}</h3>
                    <button onClick={closeModal}>닫기</button>
                </div>
            )}
        </div>
    );
}