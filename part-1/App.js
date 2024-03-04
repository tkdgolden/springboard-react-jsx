const App = () => (
    <div>
        <h1>App Component!</h1>
        <FirstComponent />
        <NamedComponent name="name" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));