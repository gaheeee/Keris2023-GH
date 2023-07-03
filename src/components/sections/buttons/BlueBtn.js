import { Link } from 'react-router-dom';

export default function BlueBtn({ to, children }) {
    return (
        <Link className="bluebtn" to={to}>
            {children}
        </Link>
    );
}