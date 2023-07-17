import img from "../../../../assets/p01/p0102_img01.png"
import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import Element from "./Element";

export default function Main() {
    return (
        <main>
            <div>
                <img src={img} alt="img" />
            </div>

            <Element />

            <div className="main-btn">
                <GreyBtn to="/p0101"></GreyBtn>
                <BlueBtn to="/p0103">다음 단계로</BlueBtn>
            </div>
        </main>
    );
}