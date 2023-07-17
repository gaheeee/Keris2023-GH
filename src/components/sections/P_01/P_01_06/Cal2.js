import styled from "styled-components";
import Num from "./Num2";
import w1 from "../../../../assets/p01/weather/w1.png";
import w2 from "../../../../assets/p01/weather/w2.png"
import w3 from "../../../../assets/p01/weather/w3.png"
import w4 from "../../../../assets/p01/weather/w4.png"
import w5 from "../../../../assets/p01/weather/w5.png"
import img_O from "../../../../assets/p01/O.png";
import img_X from "../../../../assets/p01/X.png";
import { useState} from "react";


const Day = styled.div`
padding : 5px;
background-color: #bdd7ee;
color : white;
height : 2rem;
font-size: 20px;
font-weight: bold;
`;

export default function Cal2({ handleNewSignal }) {
    const [imageToggles, setImageToggles] = useState([false, false, false]);


    const handleClick = (index) => {
      const updatedToggles = [...imageToggles];
      updatedToggles[index] = !updatedToggles[index];
      setImageToggles(updatedToggles);

      if (updatedToggles[0] && !updatedToggles[1] && updatedToggles[2]) {
        handleNewSignal(true);
      } else {
        handleNewSignal(false);
      }
    };
    
    return (
        <div className="calender2">
            <Day>일</Day>
            <Day>월</Day>
            <Day>화</Day>
            <Day>수</Day>
            <Day>목</Day>
            <Day>금</Day>
            <Day>토</Day>

            <div className="blank"><b>예측 데이터</b></div>

            <Num img={w2} data="9800" >
                7/1
                <img src={imageToggles[0] ? img_O : img_X} alt="OX" className="num-ox" onClick={() => handleClick(0)} />
            </Num>
            <Num img={w2} data="9200" >
                2
                <img src={imageToggles[1] ? img_O : img_X} alt="OX" className="num-ox" onClick={() => handleClick(1)} />
            </Num>
            <Num img={w3} data="8150" >
                3
                <img src={imageToggles[2] ? img_O : img_X} alt="OX" className="num-ox" onClick={() => handleClick(2)} />
            </Num>
            <Num img={w4}>4</Num>
            <Num img={w1}>5</Num>
            <Num img={w2}>6</Num>
            <Num img={w1}>7</Num>
            <Num img={w1}>8</Num>
            <Num img={w3}>9</Num>
            <Num img={w2}>10</Num>
            <Num img={w4}>11</Num>
            <Num img={w4}>12</Num>
            <Num img={w4}>13</Num>
            <Num img={w4}>14</Num>
            <Num img={w5}>15</Num>
            <Num img={w1}>16</Num>
            <Num img={w1}>17</Num>
            <Num img={w2}>18</Num>
            <Num img={w5}>19</Num>
            <Num img={w4}>20</Num>
            <Num img={w2}>21</Num>
            <Num img={w2}>22</Num>
            <Num img={w1}>23</Num>
            <Num img={w1}>24</Num>
            <Num img={w2}>25</Num>
            <Num img={w2}>26</Num>
            <Num img={w4}>27</Num>
            <Num img={w4}>28</Num>
            <Num img={w4}>29</Num>
            <Num img={w2}>30</Num>
            <Num img={w1}>31</Num>
        </div>
    );
}