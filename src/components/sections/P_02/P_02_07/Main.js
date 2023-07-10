import img from "../../../../assets/p02/p0203_img01.png"

import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";


export default function Main() {
    return (
        <main>
            <div>
                <img src={img} alt="img" />
            </div>

            <div>
                일곱번째 페이지
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0206"></GreyBtn>
                <BlueBtn to="/p0208">모델 선택</BlueBtn>
            </div>
        </main>
    );
}