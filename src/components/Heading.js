import stdimg from "../assets/std_img.png";
import GreyBtn from "./sections/buttons/GreyBtn";

export default function Heading({ to }) {
    return (
        <header>
            <div className="header-upper">
                <GreyBtn to = {to}></GreyBtn>
                <div className="header-blank">
                </div>
                <button className="header-logout-btn">
                    로그아웃
                </button>
                <div className="header-std">
                    <img
                        src={stdimg}
                        alt="stedent img"
                    ></img>
                    <p>김대한 학생</p>
                </div>
            </div>
            <h1>날씨에 따른 전기 사용량 예측 (회귀모델)</h1>
        </header>
    );
}