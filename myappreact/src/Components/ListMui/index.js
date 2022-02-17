import { List, ListItem } from '@mui/material';
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
    <List className="App-chatMui">
        {chats.map((chat) => (
            <ListItem key={chat.id}>{chat.name}</ListItem>
        ))}
    </List>
);