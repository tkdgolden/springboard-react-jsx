const Voter = (props) => {
    if (props.age >= 18) {
        return <h3>Please go vote!</h3>
    }
    else {
        return <h3>You must be 18 to vote!</h3>
    }
};