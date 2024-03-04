const Hobbies = (props) => (
    <ul>
        {props.hobbies.map(hobby => <li>{hobby}</li>)}
    </ul>
);