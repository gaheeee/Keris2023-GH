import img1 from "../../../../assets/p02/p0214_img01.png"
import img2 from "../../../../assets/p02/p0212_img02.png"
import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";


export default function Main() {
    return (
        <main>
            <div>
                <img src={img1} alt="img1" />
            </div>

            <div>
               <p>아래 사진에서 <b>책</b>을 찾아 라벨링을 해주세요.</p>

               <h1>책 이미지</h1>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0213"></GreyBtn>
                <BlueBtn to="/p0215">다음 단계로</BlueBtn>
            </div>
        </main>
    );
}