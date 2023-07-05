import img1 from "../../../assets/p0104_img01.png"
import BlueBtn from "../buttons/BlueBtn";
import GreyBtn from "../buttons/GreyBtn";

export default function Main() {
    return (
        <main>
            <div>
                <img src={img1} alt="img1"/>
            </div>

            <div>
               <h1>다섯번째 페이지</h1>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0104"></GreyBtn>
                <BlueBtn to="/p0106">다음 단계로</BlueBtn>
            </div>
        </main>
    );
}