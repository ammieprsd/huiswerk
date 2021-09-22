function Buttons(props){
    return(
        <fieldset>
            <span>{props.name}</span>
            <button
                disabled={!props.first} // navragen waarom dit werkt
                onClick={() => props.second(props.first - 1)}
            >
                -
            </button>
            <span>{props.first}</span>
            <button
                onClick={() => props.second(props.first + 1)}
            >
                +
            </button>
        </fieldset>
    );
}

export default Buttons