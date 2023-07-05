
export default function Card({btn, children, img}) {
    return (
        <div className="card">
            <button>{btn}</button>
            <p>{children}</p>
            <img
                src={img}
                alt="img"
            ></img>
        </div>
    );
}