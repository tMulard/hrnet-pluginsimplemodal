import './Modale.css';

function Modale ({isHidden, isHiddenCross, children, handleClick}) {

    return(
        <>
            <div className={isHidden ? "modale hidden" : "modale"}>
                {!isHiddenCross && (
                    <button onClick={handleClick} className="closeBtn"></button>
                )}
                {children}
            </div>
        </>
    );
}

export default Modale;