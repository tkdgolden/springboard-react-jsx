const TweetList = () => {
    const tweets = [
        {
            username: "test username",
            name: "Test Name",
            message: "This message is a test.",
            date: "02/02/2002"
        },
        {
            username: "tester username",
            name: "Tester Name",
            message: "This message is a tester."
        },
        {
            username: "testing username",
            name: "Testing Name",
            message: "This message is testing.",
            date: "02/02/2002"
        }
    ];
    return (
        <div>
            { tweets.map(t => <Tweet username={t.username} name={t.name} message={t.message} date={t.date} />) }
        </div>
    );
}