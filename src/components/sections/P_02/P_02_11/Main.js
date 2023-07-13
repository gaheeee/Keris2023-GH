import img from "../../../../assets/p02/p0211_img01.png"

import Grid from "./Grid";


export default function Main() {
    return (
        <main>
            <div>
                <img src={img} alt="img" />
            </div>

            <div className="p0213-main">
                <Grid
                prop_grey={"/p0210"}
                prop_blue={"/p0212"}
                />
            </div>
        </main>
    );
}