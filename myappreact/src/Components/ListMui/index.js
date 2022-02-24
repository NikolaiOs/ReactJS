import { List } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { FormMui } from '../FormMui';
import { ChatItem } from './chatItem';
import './style.css';

export const СhatMui = ({ chats, onAddChat, onDeleteChat }) => (
    <>
        <FormMui onSubmit={onAddChat}/>
        <Outlet />
        <List className="App-chatMui">
            {chats.map((chat) => (
                <ChatItem key={chat.id} chat={chat} onDeleteChat={onDeleteChat} />
            ))}
        </List>
    </>
);