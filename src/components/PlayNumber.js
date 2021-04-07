const PlayNumber = (props) => {
    return ( 
        <button 
            className="number" 
            style={{backgroundColor: colors[props.status]}}
            onClick={() => console.log("Num",props.number)}
        >
            {props.number}
        </button>
    );
}

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};
 
export default PlayNumber;