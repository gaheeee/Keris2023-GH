import img1 from "../../../../assets/p02/p0207_img02.png"
import img2 from "../../../../assets/p02/p0207_img03.png"
import img3 from "../../../../assets/p02/p0207_img04.png"
import img4 from "../../../../assets/p02/p0207_img05.png"
import { useState } from "react";

export default function Grid() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="p0207-grid">
            <div className="p0207-grid-item" onClick={() => openModal(img1)}>
                <img src={img1} alt="img1" />
            </div>
            <div className="p0207-grid-item" onClick={() => openModal(img2)}>
                <img src={img2} alt="img2" />
            </div>
            <div className="p0207-grid-item" onClick={() => openModal(img3)}>
                <img src={img3} alt="img3" />
            </div>
            <div className="p0207-grid-item" onClick={() => openModal(img4)}>
                <img src={img4} alt="img4" />
            </div>

            {selectedImage && (
                <div className="p0207-modal">
                    <div className="p0207-modal-content">
                        <img src={selectedImage} alt="modal-img" className="modal-image" />
                        <div className="p0207-modal-btn">
                            <button>검출 결과 보기</button>
                            <button>정확도 보기</button>
                            <button className="close" onClick={closeModal}>
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}