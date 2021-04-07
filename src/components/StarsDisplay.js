const StarsDisplay = (props) => {
    return ( 
    <>
        {props.utils.range(1, props.count).map(starId => (
            <div key={starId} className="star" />
        ))}
    </>
    );
}
 
export default StarsDisplay;