import img1 from "../../../../assets/p02/p0201_img01.png";
import img2 from "../../../../assets/p02/p0201_img02.png";
import img3 from "../../../../assets/p02/p0201_img03.png";
import BlueBtn from "../../buttons/BlueBtn";
import Card from "../../card/Card";

export default function Main() {
    return (
        <main>

            <p>객체 검출은 이미지에서 특정 객체를 찾아내는 모델입니다.</p>

            <div className="main-blue">
                <p>본 프로그램에서는 객체 검출 모델을 만들기 위해 데이터를 라벨링하여 모델에 넣어보고,</p>
                <p>결과로 나온 모델을 사용하여 객체 검출이 잘 이루어지는지 체험해볼 수 있습니다.</p>
            </div>
            <div className="main-manual">
                <button>매뉴얼 다운로드</button>
            </div>
            <div className="main-card">
                <Card btn="step1" img={img1}>사람 검출 모델</Card>
                <Card btn="step2" img={img2}>가방 검출 모델</Card>
                <Card btn="step3" img={img3}>최종 모델</Card>
            </div>
            <BlueBtn to="/p0202">
                체험하기
            </BlueBtn>
        </main>
    );
}