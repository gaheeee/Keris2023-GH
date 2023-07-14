
export default function Num({ children, img, data}) {



    return (
        <div className="num2">
            <div className="num-ele">
                <b>{children}</b>
                {img && <img src={img} alt="weather"/>}
                <b>{data}</b>
            </div>
        </div>
    );
}