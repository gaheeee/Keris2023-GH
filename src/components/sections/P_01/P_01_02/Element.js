import { useState } from 'react';
import Cal from './Cal';

export default function Element() {
    const [checkboxes, setCheckboxes] = useState({
        "평균 기온": true,
        "최저 기온": false,
        "최고 기온": false,
        "강수량": false,
        "습도": false,
        "풍속": false,
        "일조시간": false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        if (name === "평균 기온") {
            return; // 평균 기온 체크박스는 체크 해제를 막음
        }

        setCheckboxes(prevCheckboxes => ({
            ...prevCheckboxes,
            [name]: checked
        }));
    };

    const renderCheckboxes = () => {
        return Object.keys(checkboxes).map((checkboxName) => (
            <label key={checkboxName} className="checkbox-label">
                <span className="checkbox-name">{checkboxName}</span>
                <input
                    type="checkbox"
                    id={checkboxName}
                    className="checkbox-input"
                    name={checkboxName}
                    checked={checkboxes[checkboxName]}
                    onChange={handleCheckboxChange}
                    disabled={checkboxName === "평균 기온"} // 평균 기온 체크박스는 비활성화
                />
                <span className="checkbox-custom"></span>
            </label>
        ));
    };

    return (
        <div className="calendar-space">
            <div className="calendar-space-left">
                <b>
                    <p> • 분석에 사용하고자 하는 기상 요소에 체크해주세요.ㅤ</p>
                    <p>(요소를 1개 이상 선택해야 하므로 <br></br>평균 기온은 고정값이 됩니다.)</p>
                </b>
                <div className="calendar-check-compo">
                    {renderCheckboxes()}
                </div>
            </div>
            <div className="calendar-space-right">
                <Cal selectedElements={checkboxes}/>
            </div>
        </div>
    );
}