import img1 from "../../../../assets/p02/p0206_img02.jpg";
import img1_1 from "../../../../assets/p02//p0206_img02_1.jpg";

import img2 from "../../../../assets/p02/p0206_img03.jpg";
import img2_1 from "../../../../assets/p02/p0206_img03_1.jpg";

import img3 from "../../../../assets/p02/p0206_img04.jpg";
import img3_1 from "../../../../assets/p02/p0206_img04_1.jpg";

import img4 from "../../../../assets/p02/p0206_img05.jpg";
import img4_1 from "../../../../assets/p02/p0206_img05_1.jpg";

import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import { useState } from "react";

export default function Grid({ prop_grey, prop_blue }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPersonResult, setShowPersonResult] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setShowPersonResult(false);
    setIsClicked(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  const toggleResult = () => {
    setShowPersonResult((prevState) => !prevState);
  };


  let personImage;

  if (selectedImage === img1) {
    personImage = img1_1;
  } else if (selectedImage === img2) {
    personImage = img2_1;
  } else if (selectedImage === img3) {
    personImage = img3_1;
  } else if (selectedImage === img4) {
    personImage = img4_1;
  }

  const handleNextClick = () => {
    if (!isClicked) {
      setModalMessage("이미지를 클릭해 분석 결과를 확인해보세요 !");
      setShowModal(true);
    } else {
      window.location.href = prop_blue;
    }
  };

  return (
    <div>
      <div className="p0206-grid">
        <div className="p0206-grid-space">
          <div className="p0206-grid-item" onClick={() => openModal(img1)}>
            <img src={img1} alt="img1" />
          </div>
          <div className="p0206-grid-item" onClick={() => openModal(img2)}>
            <img src={img2} alt="img2" />
          </div>
          <div className="p0206-grid-item" onClick={() => openModal(img3)}>
            <img src={img3} alt="img3" />
          </div>
          <div className="p0206-grid-item" onClick={() => openModal(img4)}>
            <img src={img4} alt="img4" />
          </div>

          {selectedImage && (
            <div className="p0206-modal">
              <div className="p0206-modal-content" id="p0206-modal-blank">
                <img src={selectedImage} alt="modal-img" className="modal-img" />

                {showPersonResult && (
                  <img src={personImage} alt="modal-img" className="detection-img" />
                )}

                <div className="p0206-modal-btn" >
                  <button onClick={toggleResult}>
                    {showPersonResult ? "사람 검출 모델" : "사람 검출 모델"}
                  </button>
                  <button className="close" onClick={closeModal}>
                    뒤로
                  </button>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="main-btn">
        <GreyBtn to={prop_grey} />
        <BlueBtn onClick={handleNextClick}>다음 모델로</BlueBtn>
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