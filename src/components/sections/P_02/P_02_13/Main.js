import img from "../../../../assets/p02/p0213_img01.png"

import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import Grid from "../P_02_07/Grid";


export default function Main() {
    return (
        <main>
            <div>
                <img src={img} alt="img" />
            </div>

            <div className="p0213-main">
                <Grid/>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0206"></GreyBtn>
                <BlueBtn to="/p0208">분석 시작</BlueBtn>
            </div>
        </main>
    );
}