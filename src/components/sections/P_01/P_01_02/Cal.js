import styled from "styled-components";
import Num from "./Num";
import w1 from "../../../../assets/p01/weather/w1.png";
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
    const date = [
        "7/1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
    ];
    const weather_img = [
        w2, w2, w3, w4, w1, w2, w1, w1, w3, w1,
        w4, w4, w4, w4, w5, w1, w1, w2, w5, w4,
        w2, w2, w1, w1, w2, w2, w4, w4, w4, w2, w1
    ];
    const ele1 = [
        "1°C", "2°C", "3°C", "4°C", "5°C", "6°C", "7°C", "8°C", "9°C", "10°C",
        "11°C", "12°C", "13°C", "14°C", "15°C", "16°C", "17°C", "18°C", "19°C", "20°C",
        "21°C", "22°C", "23°C", "24°C", "25°C", "26°C", "27°C", "28°C", "29°C", "30°C", "31°C"
    ];
    const ele2 = [
        "1mm", "2mm", "3mm", "4mm", "5mm", "6mm", "7mm", "8mm", "9mm", "10mm",
        "11mm", "12mm", "13mm", "14mm", "15mm", "16mm", "17mm", "18mm", "19mm", "20mm",
        "21mm", "22mm", "23mm", "24mm", "25mm", "26mm", "27mm", "28mm", "29mm", "30mm", "31mm"
    ];
    const ele3 = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
    ];
    const ele4 = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
    ];
    const ele5 = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
    ];
    const ele6 = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
    ];
    const ele7 = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
    ];


    return (
        <div className="calender">
            <Day>일</Day>
            <Day>월</Day>
            <Day>화</Day>
            <Day>수</Day>
            <Day>목</Day>
            <Day>금</Day>
            <Day>토</Day>
            <div className="blank" />
            <div className="blank" />
            <div className="blank" />
            <div className="blank" />
            {date.map((date, index) => (
                <Num
                    key={date}
                    img={weather_img[index]}
                    date={date}
                    ele1={ele1[index]}
                    ele2={ele2[index]}
                    ele3={ele3[index]}
                    ele4={ele4[index]}
                    ele5={ele5[index]}
                    ele6={ele6[index]}
                    ele7={ele7[index]}
                />
            ))}
        </div>
    );
}