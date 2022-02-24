import { List } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { addChat } from '../../store/chats/actions';
import { selectChats } from '../../store/chats/selectors';
import { FormMui } from '../FormMui';
import { ChatItem } from './chatItem';
import './style.css';

export const СhatMui = () => {
    const chats = useSelector(selectChats);
    const dispatch = useDispatch();
 
    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        
        dispatch(addChat(newId, newChatName));
    };

    return (
        <>
            <FormMui onSubmit={handleAddChat}/>
            <Outlet />
            <List className="App-chatMui">
                {chats.map((chat) => (
                    <ChatItem key={chat.id} chat={chat} />
                ))}
            </List>
        </>
    )
};