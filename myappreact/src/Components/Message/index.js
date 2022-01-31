// export const Message = () => <h4>Message Text</h4>;

export function Message(props) {
    return (
        <h4 className="Message-Text">Message Text, {props.text}</h4>
    );
};