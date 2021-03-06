import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { deleteMessage, editMessage } from "../../store/messages/actions";
import { Message } from "../Message";

export const MessageList = ({ messages }) => {
  const { chatId } = useParams();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteMessage(chatId, id));
  };

  const handleEdit = (id) => {
    dispatch(editMessage(chatId, id, 'edited'));
  };

  return messages.map((message) => (
    <div key={message.id}>
      <Message text={message.text} author={message.athuor} />
      <button onClick={() => handleDelete(message.id)}>delete</button>
      <button onClick={() => handleEdit(message.id)}>edit</button>
    </div>
  ));
}; 