import { Link } from 'react-router-dom';

export default function GreyBtn({ to }) {
    return (
        <Link className="greybtn" to={to}>
            이전 단계로
        </Link>
    );
}