import { Link } from 'react-router-dom';

export default function ModelBtn({ to, children }) {
    return (
        <Link className="model-space" to={to}>
            <div className="model-img">
                
            </div>
            <p>{children}</p>
        </Link>
    );
}