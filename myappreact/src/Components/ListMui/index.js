import { List, ListItem } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import './style.css';

export const СhatMui = ({ chats }) => (
    <>
        <Outlet />
        <List className="App-chatMui">
            {chats.map((chat) => (
                <ListItem key={chat.id}>
                    <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                </ListItem>
            ))}
        </List>
    </>
);