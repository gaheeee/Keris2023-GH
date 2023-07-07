import img1 from "../../../../assets/p01/p0102_img01.png"
import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";

export default function Main() {
    return (
        <main>
            <div>
                <img src={img1} alt="img1" />
            </div>


            <div className="main-btn">
                <GreyBtn to="/p0301"></GreyBtn>
                <BlueBtn to="/p0303">다음 단계로</BlueBtn>
            </div>
        </main>
    );
}