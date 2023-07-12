import img1 from "../../../../assets/p02/p0206_img02.jpg";
import img1_1 from "../../../../assets/p02/p0206_img02_1.jpg";
import img1_2 from "../../../../assets/p02/p0206_img02_2.jpg";
import img2 from "../../../../assets/p02/p0206_img03.jpg";
import img3 from "../../../../assets/p02/p0206_img04.jpg";
import img4 from "../../../../assets/p02/p0206_img05.jpg";
import { useState } from "react";

export default function Grid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showDetectionResult, setShowDetectionResult] = useState(false);
  const [showAccuracy, setShowAccuracy] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowDetectionResult(false);
    setShowAccuracy(false);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const toggleResult = () => {
    setShowDetectionResult((prevState) => !prevState);

  };

  const toggleAccuracy = () => {
    setShowAccuracy((prevState) => !prevState);

  };

  return (
    <div className="p0207-grid">

      <div className="p0207-grid-space">
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
              <img
                src={selectedImage}
                alt="modal-img"
                className="modal-img"
              />

              {showDetectionResult && (
                <img
                  src={img1_1}
                  alt="modal-img"
                  className="detection-img"
                />
              )}

              {showAccuracy && (
                <img
                  src={img1_2}
                  alt="modal-img"
                  className="accuracy-img"
                />
              )}

              <div className="p0207-modal-btn">
                <button onClick={toggleResult}>
                  {showDetectionResult ? "검출 결과 감추기" : "검출 결과 보기"}
                </button>
                <button onClick={toggleAccuracy}>
                  {showAccuracy ? "정확도 감추기" : "정확도 보기"}
                </button>
                <button className="close" onClick={closeModal}>
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>


    </div>
  );
}
