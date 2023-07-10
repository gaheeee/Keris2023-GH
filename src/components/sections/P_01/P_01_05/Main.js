import img from "../../../../assets/p01/p0105_img01.png"
import BlueBtn from "../../buttons/BlueBtn";
import GreyBtn from "../../buttons/GreyBtn";

export default function Main() {
    return (
        <main>
            <div>
                <img src={img} alt="img"/>
            </div>

            <div>
               <h1>다섯번째 페이지
                그래프 이미지 파일로 제발 
               </h1>
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0104"></GreyBtn>
                <BlueBtn to="/p0106">다음 단계로</BlueBtn>
            </div>
        </main>
    );
}