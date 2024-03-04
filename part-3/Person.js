const Person = (props) => (
    <div>
        <hr></hr>
        <p>Learn some information about this person:</p>
        <Name name={props.name} />
        <p>Age: {props.age}</p>
        <Voter age={props.age} />
        <Hobbies hobbies={props.hobbies} />
    </div>
);