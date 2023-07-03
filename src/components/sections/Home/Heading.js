import { Link } from 'react-router-dom';
export default function Heading() {
    return (
        <div className='home-header'>
            <h1>온라인 AI 체험 프로그램</h1>
            <p>eDU Ai는 다양한 AI프로그램을 온라인으로 체험할 수 있는 플랫폼 입니다.</p>
            <p>프로그램을 통해 AI를 체험하고 개념을 이해해보세요.</p>
            <br></br>
            <Link className="home-btn" to="/">SIGN UP</Link>
            <Link className="home-btn" to="/">LEARN MORE</Link>
        </div>
    );
}