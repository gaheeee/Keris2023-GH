import img1 from "../../../../assets/p02/p0210_img01.png"
import img2 from "../../../../assets/p02/p0210_img02.png"
import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";


export default function Main() {
    return (
        <main>
            <div>
                <img src={img1} alt="img1" />
            </div>

            <div>
                <img src={img2} alt="img2" />
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0209"></GreyBtn>
                <BlueBtn to="/p0211">분석 시작</BlueBtn>
            </div>
        </main>
    );
}