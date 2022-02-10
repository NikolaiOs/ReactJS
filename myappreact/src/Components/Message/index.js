export function Message(props) {
    return (
        <h4 className="Message-Text">{props.author}: {props.text}</h4>
    );
};