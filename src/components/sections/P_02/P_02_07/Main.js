import img from "../../../../assets/p02/p0207_img01.png"

import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import Grid from "./Grid";


export default function Main() {
    return (
        <main>
            <div>
                <img src={img} alt="img" />
            </div>

            <div className="p0207-main">
                <Grid/>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0206"></GreyBtn>
                <BlueBtn to="/p0208">분석 시작</BlueBtn>
            </div>
        </main>
    );
}