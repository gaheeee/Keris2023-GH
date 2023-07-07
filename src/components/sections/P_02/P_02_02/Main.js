import img1 from "../../../../assets/p02/p0202_img01.png"
import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import Labeling from "./Labeling";

export default function Main() {
    return (
        <main>
            <div>
                <img src={img1} alt="img1" />
            </div>

            <div className="p0202-main">
                <p>먼저, <b>사람</b>을 분류하는 모델을 만들고자 합니다.
                사람을 찾아 클릭을 통해 라벨링을 해주세요.</p>
                <Labeling/>

            </div>

            <div className="main-btn">
                <GreyBtn to="/p0201"></GreyBtn>
                <BlueBtn to="/p0203">다음 단계로</BlueBtn>
            </div>
        </main>
    );
}