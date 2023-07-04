import styled from "styled-components";

const Day = styled.div`

background-color: #bdd7ee;
color : white;
height : 20px;
`;
const Num = styled.div`
border-top: solid 1px #bdd7ee;
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
            <Num></Num>
            <Num></Num>
            <Num></Num>
            <Num></Num>
            <Num>7/1</Num>
            <Num>2</Num>
            <Num>3</Num>
            <Num>4</Num>
            <Num>5</Num>
            <Num>6</Num>
            <Num>7</Num>
            <Num>8</Num>
            <Num>9</Num>
            <Num>10</Num>
            <Num>11</Num>
            <Num>12</Num>
            <Num>13</Num>
            <Num>14</Num>
            <Num>15</Num>
            <Num>16</Num>
            <Num>17</Num>
            <Num>18</Num>
            <Num>19</Num>
            <Num>20</Num>
            <Num>21</Num>
            <Num>22</Num>
            <Num>23</Num>
            <Num>24</Num>
            <Num>25</Num>
            <Num>26</Num>
            <Num>27</Num>
            <Num>28</Num>
            <Num>29</Num>
            <Num>30</Num>
            <Num>31</Num>
        </div>
    );
}