import stdimg from "../assets/std_img.png";
import GreyBtn from "./sections/buttons/GreyBtn";

export default function Heading({ to , children}) {
    return (
        <header>
            <div className="header-upper">
                <GreyBtn to = {to}></GreyBtn>
                <div className="header-blank"/>
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
            <h1>{children}</h1>
        </header>
    );
}