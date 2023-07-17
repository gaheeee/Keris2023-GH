import img from "../../../../assets/p01/p0106_img01.png"
import arrow from "../../../../assets/p01/p0106_img02.png"
import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import Cal from "./Cal";
import Cal2 from "./Cal2";
import img_O from "../../../../assets/p01/O.png";
import img_X from "../../../../assets/p01/X.png";
import { useState } from "react";

export default function Main() {
    const [newSignal, setNewSignal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleNewSignal = (signal) => {
        setNewSignal(signal);
    };

    const handleNextClick = () => {
        if (newSignal) {
            window.location.href = "/p0107";
        }else {
            setModalMessage("다시 표시해주세요 !");
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <main>
            <div>
                <img src={img} alt="img" />
            </div>
            <h4>전력값의 실제 데이터와 예측 데이터가 200 이하로 차이나면
                <img src={img_O} alt="img" className="h4-ox" /> ,
                200 이상
                <img src={img_X} alt="img" className="h4-ox" />
                표시(클릭)해주세요.</h4>
            <div className="calendar-space2">
                <Cal />

                <img src={arrow} alt="arrow" />

                <Cal2 handleNewSignal={handleNewSignal} />
            </div>
            <div className="main-btn">
                <GreyBtn to="/p0105"></GreyBtn>
                <BlueBtn onClick={handleNextClick}>체험 종료</BlueBtn>
            </div>

            {showModal && (
                <div className="modal">
                    <h3>{modalMessage}</h3>
                    <button onClick={closeModal}>닫기</button>
                </div>
            )}
        </main>
    );
}