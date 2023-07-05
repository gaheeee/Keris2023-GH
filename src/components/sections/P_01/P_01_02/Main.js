import img1 from "../../../../assets/p0102_img01.png"
import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import Cal from "./Cal";
import Element from "./Element";

export default function Main() {
    return (
        <main>
            <div>
                <img src={img1} alt="img1" />
            </div>

            <div className="calendar-space">
                <div className="calendar-space-left">
                    <b>
                    <p> • 분석에 사용하고자 하는 기상 요소에 체크해주세요.ㅤ</p>
                    <p>(요소를 1개 이상 선택해야 하므로 <br></br>평균 기온은 고정값이 됩니다.)</p>
                    </b>
                   
                    <Element />
                </div>

                <div className="calendar-space-right">
                    <Cal />
                </div>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0101"></GreyBtn>
                <BlueBtn to="/p0103">다음 단계로</BlueBtn>
            </div>
        </main>
    );
}