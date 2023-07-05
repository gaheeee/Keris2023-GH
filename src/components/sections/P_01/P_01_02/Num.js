

export default function Num({ children, img }) {
    return (
        <div className="num">
            <div className="num-ele">
                {children}
                    요소1<br></br>
                    요소2<br></br>
                    요소3
            </div>

            <div>
            {img && <img src={img} alt="weather" />}
            </div>
        </div>
    );
}