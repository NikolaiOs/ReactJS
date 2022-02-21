import { List, ListItem } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

const chats = [
    {
        name: 'chat 1',
        id: 'chat1'
    },
    {
        name: 'chat 2',
        id: 'chat2'
    }
];

export const СhatMui = () => (
    <>
        <List className="App-chatMui">
            {chats.map((chat) => (
                <ListItem key={chat.id}>
                    <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                </ListItem>
            ))}
        </List>
        <Outlet />
    </>
);