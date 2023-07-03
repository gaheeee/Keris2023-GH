import BlueBtn from "../buttons/BlueBtn";
import GreyBtn from "../buttons/GreyBtn";
import CheckBtn from "./CheckBtn";

import { useState } from 'react';
import styled from "styled-components";
import img1 from "../../../assets/p0103_img01.png"
import img2 from "../../../assets/p0103_img02.png"
import img3 from "../../../assets/p0103_img03.png"
import img4 from "../../../assets/p0103_img04.png"

const Model = styled.div`
  width : 25%;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  margin: 0rem 1rem;
  background-color: ${(props) => props.border};
  border: solid 1px ${(props) => props.border};

  >img {
    margin: auto;
    width: 50%;
  }
`;

const ModelDes = styled.div`
    width : 30% ; 
    border-radius: 40px;
    padding : 2rem 1rem;
    border: solid 2px ${(props) => props.border};
`

function Main() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };


    return (
        <main>
            <div>
                <img src={img1} alt="img1" />
            </div>

            <div className="model-check">
                <CheckBtn
                    isActive={selectedTab === 0}
                    onClick={() => handleTabClick(0)}
                >
                    선형 회귀 모델
                </CheckBtn>
                <CheckBtn
                    isActive={selectedTab === 1}
                    onClick={() => handleTabClick(1)}
                >
                    다항 회귀 모델
                </CheckBtn>
                <CheckBtn
                    isActive={selectedTab === 2}
                    onClick={() => handleTabClick(2)}
                >
                    로지스틱 회귀 모델
                </CheckBtn>
            </div>

            <div className="model-check-space">
                {selectedTab === 0 && (
                    <>
                        <Model className="checked-model-img-space" border="#b4c7e7">
                            <img  src={img2} alt="img2" />
                        </Model>
                        <ModelDes border="#b4c7e7">
                            <h3>선형 회귀 모델</h3>
                            <p>선형 회귀 모델은 <b>숫자들 사이의 직선적인 관계를 찾아서 예측하는 데 사용</b>합니다.</p>

                            <p>선형 회귀 모델은 두 개 이상의 숫자를 가지고 그 숫자 사이의 관계를 나타내는
                                선이 있는지 알아보는 모델입니다. 선이 있다면, 그 숫자들 사이에는 일정한 
                                규칙이 있을 수 있다고 가정할 수 있습니다. 가장 기본적인 회귀 모델입니다.
                            </p>
                        </ModelDes>
                    </>
                )}
                {selectedTab === 1 && (
                    <>
                        <Model className="checked-model-img-space" border="#ffe699">
                            <img src={img3} alt="img3" />
                        </Model>
                        <ModelDes border="#ffe699">
                            <h3>다항 회귀 모델</h3>
                            <p>다항 회귀 모델은 직선이 아닌
                                 <b>곡선을 사용해서 값을 예측</b>하는 모델입니다.</p>

                            <p>다항 회귀 모델은 선형 회귀 모델을 좀 더 복잡하게 만든 모델로서 
                                더욱 복잡한 형태의 규칙을 찾을 수 있습니다. 또한 숫자들이 직선보다는 곡선으로 
                                연결되어 있을 가능성이 크기 때문에 더욱 높은 정확성을 보일 가능성이 있습니다.
                            </p>
                        </ModelDes>
                    </>
                )}
                {selectedTab === 2 && (
                    <>
                        <Model className="checked-model-img-space" border="#f4b183">
                            <img src={img4} alt="img4" />
                        </Model>
                        <ModelDes border="#f4b183">
                            <h3>로지스틱 회귀 모델</h3>
                            <p>로지스틱 회귀 모델은 <b>주로 '예' 또는 '아니오'와 같은 이진 분류 문제를 해결하는 데 사용</b>
                            됩니다. 예를 들어, "비가 올까요?"라는 질문에 대해 '예' 또는 '아니오'로 대답하는 것입니다.
                            </p>

                            <p>이 모델은 숫자들 사이의 규칙을 찾아서 확률로 예측하는데 예를 들어, 
                                비가 올 확률이 70%라면 '예'라고 예측할 수 있습니다.
                            </p>
                        </ModelDes>
                    </>
                )}
            </div>

            <div className="main-btn">
                <GreyBtn to="/p0102"></GreyBtn>
                <BlueBtn to="/p0104">모델 선택</BlueBtn>
            </div>
        </main>
    );
}

export default Main;