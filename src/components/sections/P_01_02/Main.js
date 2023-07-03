import img1 from "../../../assets/p0102_img01.png"
import BlueBtn from "../buttons/BlueBtn";
import GreyBtn from "../buttons/GreyBtn";

export default function Main() {
    return (
        <main>
            <div>
                <img src={img1} alt="img1"/>
            </div>

            <div>
               <h1>달력</h1>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0101"></GreyBtn>
                <BlueBtn to="/p0103">다음 단계로</BlueBtn>
            </div>
        </main>
    );
}