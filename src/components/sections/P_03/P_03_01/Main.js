import img1 from "../../../../assets/p0301_img01.png";
import img2 from "../../../../assets/p0301_img02.png";
import img3 from "../../../../assets/p0301_img03.png";
import BlueBtn from "../../buttons/BlueBtn";
import Card from "../../card/Card";

export default function Main() {
    return (
        <main>

            <p>특징이 비슷한 데이터끼리 모으는 것을 군집화 또는 클러스터링이라고 합니다.</p>

            <div className="main-blue">
                <p>본 프로그램에서는 과일 사진을 이용하여 이들의 특성에 따라 데이터를 클러스터링하고</p>
                <p>이 모델이 다른 과일 사진을 입력 받았을 때에도 종류에 맞게 분류해내는지 체험할 수 있습니다.</p>
            </div>
            <div className="main-manual">
                <button>매뉴얼 다운로드</button>
            </div>
            <div className="main-card">
                <Card btn="step1" img={img1}>데이터 확인</Card>
                <Card btn="step2" img={img2}>과정 확인</Card>
                <Card btn="step3" img={img3}>결과 확인</Card>
            </div>
            <BlueBtn to="/p0302">
                체험하기
            </BlueBtn>
        </main>
    );
}