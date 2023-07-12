import img from "../../../../assets/p02/p0212_img01.png"
import img1 from "../../../../assets/p02/p0217_img03.png"
import img2 from "../../../../assets/p02/p0217_img04.png"
import img3 from "../../../../assets/p02/p0217_img05.png"
import Labeling from "../P_02_02/Labeling";


export default function Main() {

    return (
        <main>
            <div>
                <img src={img} alt="img" />
            </div>

            <b>세번째 컴퓨터 라벨링 (사진 교체 후 문구 지우기 1번 정답)</b>

            <div className="p0202-main">
                <p>아래 사진에서 <b>“컴퓨터”</b>을 알맞게 라벨링한 사진을 찾아주세요.</p>
                <Labeling
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    answer="img1"
                    fail1="img2"
                    fail2="img3"
                    prop_grey={"/p0216"}
                    prop_blue={"/p0218"}
                />
            </div>
        </main>
    );
}