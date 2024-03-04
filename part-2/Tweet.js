const Tweet = ({ username, name, message, date="02/20/1999" }) => (
    <div class="tweet">
        <h1><b>{name}</b></h1>
        <h4 class="unimportant">@{username}</h4>
        <p>{message}</p>
        <p class="unimportant"><i>{date}</i></p>
    </div>
);
