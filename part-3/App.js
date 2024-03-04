const App = () => (
    <div>
        <Person name="Alexandra" age={30} hobbies={["Teaching", "Reading", "Embroidery"]} />
        <Person name="Stan" age={12} hobbies={["Soccer", "Reading", "Hot Wheels"]} />
        <Person name="Dawn" age={18} hobbies={["Soccer", "Climbing", "Fixing Cars"]} />

    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));