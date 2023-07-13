import img1 from "../../../../assets/p02/p0206_img02.jpg";
import img1_1 from "../../../../assets/p02//p0206_img02_1.jpg";
import img1_2 from "../../../../assets/p02/p0206_img02_2.jpg";
import img1_3 from "../../../../assets/p02/p0206_img02_5.jpg";
import img1_4 from "../../../../assets/p02/p0206_img02_5.jpg";
import img1_5 from "../../../../assets/p02/p0206_img02_6.jpg";

import img2 from "../../../../assets/p02/p0206_img03.jpg";
import img2_1 from "../../../../assets/p02/p0206_img03_1.jpg";
import img2_2 from "../../../../assets/p02/p0206_img03_2.jpg";
import img2_3 from "../../../../assets/p02/p0206_img03_5.jpg";
import img2_4 from "../../../../assets/p02/p0206_img03_2.jpg";
import img2_5 from "../../../../assets/p02/p0206_img03_6.jpg";

import img3 from "../../../../assets/p02/p0206_img04.jpg";
import img3_1 from "../../../../assets/p02/p0206_img04_1.jpg";
import img3_2 from "../../../../assets/p02/p0206_img04_2.jpg";
import img3_3 from "../../../../assets/p02/p0206_img04_5.jpg";
import img3_4 from "../../../../assets/p02/p0206_img04_2.jpg";
import img3_5 from "../../../../assets/p02/p0206_img04_6.jpg";

import img4 from "../../../../assets/p02/p0206_img05.jpg";
import img4_1 from "../../../../assets/p02/p0206_img05_1.jpg";
import img4_2 from "../../../../assets/p02/p0206_img05_2.jpg";
import img4_3 from "../../../../assets/p02/p0206_img05_5.jpg";
import img4_4 from "../../../../assets/p02/p0206_img05_2.jpg";
import img4_5 from "../../../../assets/p02/p0206_img05_6.jpg";

import { useState } from "react";

export default function Grid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPersonResult, setShowPersonResult] = useState(false);
  const [showBagResult, setShowBagResult] = useState(false);
  const [showBookResult, setShowBookResult] = useState(false);
  const [showComputerResult, setShowComputerResult] = useState(false);
  const [showFinalResult, setShowFinalResult] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowPersonResult(false);
    setShowBagResult(false);
    setShowBookResult(false);
    setShowComputerResult(false);
    setShowFinalResult(false);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const togglePersonResult = () => {
    setShowPersonResult((prevState) => !prevState);
    setShowBagResult(false);
    setShowBookResult(false);
    setShowComputerResult(false);
    setShowFinalResult(false);
  };

  const toggleBagResult = () => {
    setShowBagResult((prevState) => !prevState);
    setShowPersonResult(false);
    setShowBookResult(false);
    setShowComputerResult(false);
    setShowFinalResult(false);
  };

  const toggleBookResult = () => {
    setShowPersonResult((prevState) => !prevState);
    setShowPersonResult(false);
    setShowBagResult(false);
    setShowComputerResult(false);
    setShowFinalResult(false);
  };

  const toggleComputerResult = () => {
    setShowBagResult((prevState) => !prevState);
    setShowPersonResult(false);
    setShowBagResult(false);
    setShowBookResult(false);
    setShowFinalResult(false);
  };

  const toggleFinalResult = () => {
    setShowFinalResult((prevState) => !prevState);
    setShowPersonResult(false);
    setShowBagResult(false);
    setShowBookResult(false);
    setShowComputerResult(false);
  };

  let personImage, bagImage, bookImage, computerImage, finalImage;

  if (selectedImage === img1) {
    personImage = img1_1;
    bagImage = img1_2;
    bookImage = img1_3;
    computerImage = img1_4;
    finalImage = img1_5;
  } else if (selectedImage === img2) {
    personImage = img2_1;
    bagImage = img2_2;
    bookImage = img2_3;
    computerImage = img2_4;
    finalImage = img2_5;
  } else if (selectedImage === img3) {
    personImage = img3_1;
    bagImage = img3_2;
    bookImage = img3_3;
    computerImage = img3_4;
    finalImage = img3_5;
  } else if (selectedImage === img4) {
    personImage = img4_1;
    bagImage = img4_2;
    bookImage = img4_3;
    computerImage = img4_4;
    finalImage = img4_5;
  }

  return (
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
            <div className="p0206-modal-content">
              <img src={selectedImage} alt="modal-img" className="modal-img" />

              {showPersonResult && (
                <img src={personImage} alt="modal-img" className="detection-img" />
              )}

              {showBagResult && (
                <img src={bagImage} alt="modal-img" className="detection-img" />
              )}

              {showBookResult && (
                <img src={bookImage} alt="modal-img" className="detection-img" />
              )}

              {showComputerResult && (
                <img src={computerImage} alt="modal-img" className="detection-img" />
              )}

              {showFinalResult && (
                <img src={finalImage} alt="modal-img" className="detection-img" />
              )}

              <div className="p0206-modal-btn">
                <button onClick={togglePersonResult}>
                  {showPersonResult ? "사람 검출 모델" : "사람 검출 모델"}
                </button>
                <button onClick={toggleBagResult}>
                  {showBagResult ? "가방 검출 모델" : "가방 검출 모델"}
                </button>
                <button onClick={toggleBookResult}>
                  {showPersonResult ? "책 검출 모델" : "책 검출 모델"}
                </button>
                <button onClick={toggleComputerResult}>
                  {showComputerResult ? "컴퓨터 검출 모델" : "컴퓨터 검출 모델"}
                </button>
                <button onClick={toggleFinalResult}>
                  {showFinalResult ? "최종 모델" : "최종 모델"}
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
  );
}