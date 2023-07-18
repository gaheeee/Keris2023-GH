import styled from "styled-components";
import Num from "./Num";
import w1 from "../../../../assets/p01/weather/w1.png";
import w2 from "../../../../assets/p01/weather/w2.png";
import w3 from "../../../../assets/p01/weather/w3.png";
import w4 from "../../../../assets/p01/weather/w4.png";
import w5 from "../../../../assets/p01/weather/w5.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Day = styled.div`
padding : 5px;
background-color: #bdd7ee;
color : white;
height : 2rem;
font-size: 20px;
font-weight: bold;
`;

export default function Cal({ selectedElements }) {
    const [ele7, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://50d47fc2-13b1-4717-a6aa-5bd9e15af203.mock.pstmn.io/data")
            .then((result) => {
               // console.log(result.data);
                setData(result.data);
            })
            .catch((error) => {
                console.log('error: ' + error);
            });
    }, []);
    

    const date = [
        '7/1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',
    ];
    const weather_img = [
        w2, w2, w3, w4, w1, w2, w1, w1, w3, w1,
        w4, w4, w4, w4, w5, w1, w1, w2, w5, w4,
        w2, w2, w1, w1, w2, w2, w4, w4, w4, w2, w1,
    ];
    const ele1 = [
        '1°C', '2°C', '3°C', '4°C', '5°C', '6°C', '7°C', '8°C', '9°C', '10°C',
        '11°C', '12°C', '13°C', '14°C', '15°C', '16°C', '17°C', '18°C', '19°C', '20°C',
        '21°C', '22°C', '23°C', '24°C', '25°C', '26°C', '27°C', '28°C', '29°C', '30°C', '31°C',
    ];
    const ele2 = [
        '1mm', '2mm', '3mm', '4mm', '5mm', '6mm', '7mm', '8mm', '9mm', '10mm',
        '11mm', '12mm', '13mm', '14mm', '15mm', '16mm', '17mm', '18mm', '19mm', '20mm',
        '21mm', '22mm', '23mm', '24mm', '25mm', '26mm', '27mm', '28mm', '29mm', '30mm', '31mm',
    ];
    const ele3 = [
        '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0',
        '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0',
        '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '3.0', '3.1',
    ];
    const ele4 = [
        '1a', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31',
    ];
    const ele5 = [
        "1b", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
    ];
    const ele6 = [
        "1c", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
    ];


    let activeElements = [];
    if (selectedElements['평균 기온']) {
        activeElements.push(ele1);
    }
    if (selectedElements['최저 기온']) {
        activeElements.push(ele2);
    }
    if (selectedElements['최고 기온']) {
        activeElements.push(ele3);
    }
    if (selectedElements['강수량']) {
        activeElements.push(ele4);
    }
    if (selectedElements['습도']) {
        activeElements.push(ele5);
    }
    if (selectedElements['풍속']) {
        activeElements.push(ele6);
    }
    if (selectedElements['일조시간']) {
        activeElements.push(ele7);
    }

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
            {date.map((date, index) => (
                <Num
                    key={date}
                    img={weather_img[index]}
                    date={date}
                    {...activeElements.reduce((acc, activeElement) => {
                        return { ...acc, [`ele${activeElements.indexOf(activeElement) + 1}`]: activeElement[index] };
                    }, {})}
                />
            ))}
        </div>
    );
}