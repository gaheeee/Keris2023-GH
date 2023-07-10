import img from "../../../../assets/p01/p0106_img01.png"
import arrow from "../../../../assets/p01/p0106_img02.png"
import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import Cal from "../P_01_02/Cal";

export default function Main() {
    return (
        <main>
            <div>
                <img src={img} alt="img"/>
            </div>
            <h4>전력값의 실제 데이터와 예측 데이터가 200 이하로 차이나면 O, 200 이상 X 표시해주세요.</h4>
            <div className="calendar-space2">
               <Cal/>
               <div>
               <img src={arrow} alt="arrow"/>
                </div>
               <Cal/>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0105"></GreyBtn>
                <BlueBtn to="/p0107">체험 종료</BlueBtn>
            </div>
        </main>
    );
}