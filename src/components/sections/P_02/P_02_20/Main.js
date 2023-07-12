import img1 from "../../../../assets/p02/p0219_img01.png"

import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";


export default function Main() {
    return (
        <main>
            <div>
                <img src={img1} alt="img1" />
            </div>

            <div>
                <h1>체험 종료 페이지 !</h1>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0219"></GreyBtn>
                <BlueBtn to="/">홈으로 돌아가기</BlueBtn>
            </div>
        </main>
    );
}