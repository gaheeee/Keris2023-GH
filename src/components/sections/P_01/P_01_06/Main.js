import img from "../../../../assets/p01/p0106_img01.png"
import arrow from "../../../../assets/p01/p0106_img02.png"
import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import Cal from "./Cal";
import Cal2 from "./Cal2";
import img_O from "../../../../assets/p01/O.png";
import img_X from "../../../../assets/p01/X.png";

export default function Main() {
    return (
        <main>
            <div>
                <img src={img} alt="img" />
            </div>
            <h4>전력값의 실제 데이터와 예측 데이터가 200 이하로 차이나면 
                <img src={img_O} alt="img" className="h4-ox"/> ,
                200 이상  
                <img src={img_X} alt="img" className="h4-ox"/> 
                표시(클릭)해주세요.</h4>
            <div className="calendar-space2">
                <Cal />

                <img src={arrow} alt="arrow" />

                <Cal2 />
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0105"></GreyBtn>
                <BlueBtn to="/p0107">체험 종료</BlueBtn>
            </div>
        </main>
    );
}