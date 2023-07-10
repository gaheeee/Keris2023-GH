import { Link } from 'react-router-dom';

export default function BlueBtn({ to, children, onClick  }) {
    return (
        <Link className="bluebtn" to={to} onClick={onClick}>
            {children}
        </Link>
    );
}