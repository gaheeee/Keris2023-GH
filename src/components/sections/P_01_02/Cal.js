import styled from "styled-components";
import Num from "./Num";
import w1 from "../../../assets/weather/w1.png" ;
import w2 from "../../../assets/weather/w2.png" 
import w3 from "../../../assets/weather/w3.png" 
import w4 from "../../../assets/weather/w4.png" 
import w5 from "../../../assets/weather/w5.png" 


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
            <Num img={w2}>
                <b>7/1</b>
            </Num>
            <Num img={w2}><b>2</b></Num>
            <Num img={w3}><b>3</b></Num>
            <Num img={w4}><b>4</b></Num>
            <Num img={w1}><b>5</b></Num>
            <Num img={w2}><b>6</b></Num>
            <Num img={w1}><b>7</b></Num>
            <Num img={w1}><b>8</b></Num>
            <Num img={w3}><b>9</b></Num>
            <Num img={w2}><b>10</b></Num>
            <Num img={w4}><b>11</b></Num>
            <Num img={w4}><b>12</b></Num>
            <Num img={w4}><b>13</b></Num>
            <Num img={w4}><b>14</b></Num>
            <Num img={w5}><b>15</b></Num>
            <Num img={w1}><b>16</b></Num>
            <Num img={w1}><b>17</b></Num>
            <Num img={w2}><b>18</b></Num>
            <Num img={w5}><b>19</b></Num>
            <Num img={w4}><b>20</b></Num>
            <Num img={w2}><b>21</b></Num>
            <Num img={w2}><b>22</b></Num>
            <Num img={w1}><b>23</b></Num>
            <Num img={w1}><b>24</b></Num>
            <Num img={w2}><b>25</b></Num>
            <Num img={w2}><b>26</b></Num>
            <Num img={w4}><b>27</b></Num>
            <Num img={w4}><b>28</b></Num>
            <Num img={w4}><b>29</b></Num>
            <Num img={w2}><b>30</b></Num>
            <Num img={w1}><b>31</b></Num>
        </div>
    );
}