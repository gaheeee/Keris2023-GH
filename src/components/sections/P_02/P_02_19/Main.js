import img from "../../../../assets/p02/p0219_img01.png"
import Grid from "./Grid";


export default function Main() {
    return (
        <main>
            <div>
                <img src={img} alt="img" />
            </div>

            <div className="p0213-main">
                <Grid
                 prop_grey={"/p0218"}
                 prop_blue={"/p0220"}
                />
            </div>
        </main>
    );
}