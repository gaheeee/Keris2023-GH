import img1 from "../../../../assets/p01/p0106_img01.png"
import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";

export default function Main() {
    return (
        <main>
            <div>
                <img src={img1} alt="img1"/>
            </div>

            <div>
               <h1>일곱번째 페이지</h1>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0106"></GreyBtn>
                <BlueBtn to="/">체험 종료</BlueBtn>
            </div>
        </main>
    );
}