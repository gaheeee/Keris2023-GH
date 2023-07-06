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
                        비지도학습
                    </TabBtn>
                    <TabBtn
                        isActive={selectedTab === 1}
                        onClick={() => handleTabClick(1)}>
                        지도학습
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
                            <ModelBtn to="/p0101">나와 유사한 유명인 찾기</ModelBtn>
                            <ModelBtn to="/p0201">사진 명화풍 만들기</ModelBtn>
                            <ModelBtn to="/p0301">키워드로 작문 하기</ModelBtn>
                        </>
                    )}
                    {selectedTab === 1 && (
                        <>
                            <ModelBtn to="/">감기환자 분류</ModelBtn>
                            <ModelBtn to="/">성별 나이 분류</ModelBtn>
                            <ModelBtn to="/">텍스트 감정분석 하기</ModelBtn>
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