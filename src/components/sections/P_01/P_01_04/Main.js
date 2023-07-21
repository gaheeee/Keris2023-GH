import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import img1 from "../../../../assets/p01/p0104_img01.png";
import img2 from "../../../../assets/p01/p0104_img02.png";
import img3 from "../../../../assets/p01/p0104_img03.png";
import GreenB from "./GreenB";


export default function Main() {
    return (
        <main>
            <div>
                <img src={img1} alt="img1" />
            </div>

            <div className="p0104-main">
                <div>
                    <img src={img2} alt="img2" />
                </div>
                <div className="board-wrap">
                    <div className="board-img">
                        <img src={img3} alt="img3" />
                    </div>
                    <div className="board-text">

                        <GreenB/>
                    </div>
                </div>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0103"></GreyBtn>
                <BlueBtn to="/p0105">결과 확인</BlueBtn>
            </div>
        </main>
    );
}