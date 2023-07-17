import styled from "styled-components";
import Num from "./Num";
import w1 from "../../../../assets/p01/weather/w1.png" ;
import w2 from "../../../../assets/p01/weather/w2.png" 
import w3 from "../../../../assets/p01/weather/w3.png" 
import w4 from "../../../../assets/p01/weather/w4.png" 
import w5 from "../../../../assets/p01/weather/w5.png" 


const Day = styled.div`
padding : 5px;
background-color: #bdd7ee;
color : white;
height : 2rem;
font-size: 20px;
font-weight: bold;
`;

export default function Cal() {

    return (
        <div className="calender">
            <Day>일</Day>
            <Day>월</Day>
            <Day>화</Day>
            <Day>수</Day>
            <Day>목</Day>
            <Day>금</Day>
            <Day>토</Day>
            <div className="blank"/>
            <div className="blank"/>
            <div className="blank"/>
            <div className="blank"/>
            <Num img={w2}>7/1</Num>
            <Num img={w2}>2</Num>
            <Num img={w3}>3</Num>
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