const Name = (props) => {
    if (props.name.length > 8) {
        return <p>{ props.name.slice(0,6) }</p>;
    }
    else {
        return <p>{ props.name }</p>
    }
};