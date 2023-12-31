import { useState } from 'react';
import TabBtn from "./TabBtn";
import ModelBtn from "./ModelBtn";

export default function Main() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };
    return (
        <div className="home-main">
            <div>
                <h1>AI 체험 프로그램</h1>
            </div>
            <div className="tab">
                <div className="tab-bar-container">
                    <TabBtn
                        isActive={selectedTab === 0}
                        onClick={() => handleTabClick(0)}
                    >
                        지도학습
                    </TabBtn>
                    <TabBtn
                        isActive={selectedTab === 1}
                        onClick={() => handleTabClick(1)}>
                        비지도학습
                    </TabBtn>
                    <TabBtn
                        isActive={selectedTab === 2}
                        onClick={() => handleTabClick(2)}>
                        강화학습
                    </TabBtn>
                    <TabBtn
                        isActive={selectedTab === 3}
                        onClick={() => handleTabClick(3)}>
                        개념학습
                    </TabBtn>
                </div>
                <div className="button-container">
                    {selectedTab === 0 && (
                        <>
                            <ModelBtn to="/p0101">날씨에 따른 전기 사용량 예측</ModelBtn>
                            <ModelBtn to="/p0201">사진에서 서로 다른 대상 찾아내기</ModelBtn>
                            <ModelBtn to="/p0301">과일 분류하기</ModelBtn>
                        </>
                    )}
                    {selectedTab === 1 && (
                        <>
                            <ModelBtn to="/">나와 유사한 유명인 찾기</ModelBtn>
                            <ModelBtn to="/">사진 명화풍 만들기</ModelBtn>
                            <ModelBtn to="/">키워드로 작문하기</ModelBtn>
                        </>
                    )}
                    {selectedTab === 2 && (
                        <>
                            <ModelBtn to="/">Flappy Bird</ModelBtn>
                        </>
                    )}
                    {selectedTab === 3 && (
                        <>
                            <ModelBtn to="/">단어 맞추기</ModelBtn>
                            <ModelBtn to="/">공유자전거 수요 예측</ModelBtn>
                        </>
                    )}
                </div>
            </div>
        </div>

    );
}