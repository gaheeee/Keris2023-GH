export default function Num({ date, img, ele1, ele2, ele3, ele4, ele5, ele6, ele7 }) {

    return (
        <div className="num">
            <div className="num-ele">
                <b>{date}</b>
                {img && <img src={img} alt="weather" />}
            </div>

            <div className="num-span">
                <p>{ele1}</p>
                <p>{ele2}</p>
                <p>{ele3}</p>
                <p>{ele4}</p>
                <p>{ele5}</p>
                <p>{ele6}</p>
                <p>{ele7}</p>
            </div>
        </div>
    );
}