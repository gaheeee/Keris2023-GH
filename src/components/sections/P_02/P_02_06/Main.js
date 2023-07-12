import img from "../../../../assets/p02/p0206_img01.png"

import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";
import Grid from "./Grid";


export default function Main() {
    return (
        <main>
            <div>
                <img src={img} alt="img" />
            </div>

            <div>
                <Grid/>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0205"></GreyBtn>
                <BlueBtn to="/p0207">다음 모델로</BlueBtn>
            </div>
        </main>
    );
}