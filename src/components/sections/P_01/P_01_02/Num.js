export default function Num({ children, img, selectedCheckboxes }) {


    const renderSelectedCheckboxes = () => {
        if (selectedCheckboxes && selectedCheckboxes.length > 0) {
            return selectedCheckboxes.map((checkboxName, index) => (
                <span key={index}>{checkboxName}<br /></span>
            ));
        }
        return null;
    };

    return (
        <div className="num">
            <div className="num-ele">
                <b>{children}</b>
                {img && <img src={img} alt="weather" />}
            </div>

            <div className="num-span">
                <p>
                    {renderSelectedCheckboxes()}
                </p>
            </div>
        </div>
    );
}