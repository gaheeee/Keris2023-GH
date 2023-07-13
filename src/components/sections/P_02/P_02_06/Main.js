import img from "../../../../assets/p02/p0206_img01.png"
import Grid from "./Grid";


export default function Main() {
    return (
        <main>
            <div>
                <img src={img} alt="img" />
            </div>

            <div>
                <Grid
                prop_grey={"/p0205"}
                prop_blue={"/p0207"}
                />
            </div>
        </main>
    );
}