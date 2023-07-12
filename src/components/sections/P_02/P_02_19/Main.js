import img from "../../../../assets/p02/p0219_img01.png"

import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import Grid from "./Grid";


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
                <GreyBtn to="/p0218"></GreyBtn>
                <BlueBtn to="/p0220">체험 종료</BlueBtn>
            </div>
        </main>
    );
}