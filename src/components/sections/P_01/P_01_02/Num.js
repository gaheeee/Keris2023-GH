
export default function Num({ children, img }) {

    const element = [
        "평균", "최저", "최고", "강수량", "습도", "풍속", "일조"
    ];


    return (
        <div className="num">
            <div className="num-ele">
                <b>{children}</b>
                {img && <img src={img} alt="weather"/>}
            </div>

            <div className="num-span">
                <p>
                    {element.map((elem, index) => (
                        <span key={index}>{elem}<br /></span>
                    ))}
                </p>
                
            </div>
        </div>
    );
}