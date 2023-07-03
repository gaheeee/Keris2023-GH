import img1 from "../../../assets/p0101_img01.png";
import img2 from "../../../assets/p0101_img02.png";
import img3 from "../../../assets/p0101_img03.png";
import BlueBtn from "../buttons/BlueBtn";

export default function Main() {
    return (
        <main>

            <p>회귀 모델은 데이터 사이의 관계를 알아내어 이를 예측에 사용하는 모델입니다.</p>

            <div className="main-blue">
                <p>본 프로그램에서는 온도, 습도 등의 날씨 데이터를 기반으로 전력량을 예측하는 회귀 모델을 만들어보고,</p>
                <p>완성된 모델을 이용하여 미래의 날씨를 예측 값을 구하는 과정을 체험할 수 있습니다.</p>
            </div>
            <div className="main-manual">
                <button>매뉴얼 다운로드</button>
            </div>
            <div className="main-card">
                <div className="card">
                    <button>step 1</button>
                    <p>데이터 선택</p>
                    <img
                        src={img1}
                        alt="img1"
                    ></img>
                </div>
                <div className="card">
                    <button>step 2</button>
                    <p>모델 선택</p>
                    <img
                        src={img2}
                        alt="img2"
                    ></img>
                </div>
                <div className="card">
                    <button>step 3</button>
                    <p>결과 확인</p>
                    <img
                        src={img3}
                        alt="img3"
                    ></img>
                </div>
            </div>
            <BlueBtn to="/p0102">
                체험하기
            </BlueBtn>
        </main>
    );
}