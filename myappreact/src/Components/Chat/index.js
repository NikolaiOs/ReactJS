import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Message } from '../Message';
import { FormMui } from '../FormMui';
import { AUTHORS } from '../../utils/constants';
import '../../App.css'
import { Navigate, useParams } from 'react-router-dom';
import { СhatMui } from '../ListMui'

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9800",
    },
    secondary: {
      main: "#0098FF",
    },
  },
});

const chats = [{ id: "chat1" }];
const messages = {
    chat1: [],
};

export function Chat() {
  const params = useParams();
  const { chatId } = params;

  const [messageList, setMessageList] = useState({
      chat1: [],
      chat2: [],
  });
  const messagesEnd = useRef();

  const handleMessageClick = () => {

  };

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
    };
    
    setMessageList((prevMessageList) => ({
        ...prevMessageList,

        [chatId]: [...prevMessageList[chatId], newMsg],
        }));
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (
        messageList[chatId]?.[messageList[chatId]?.length - 1]?.author === AUTHORS.ME
        ) {
            timeout = setTimeout(() => {
                sendMessage("01 00 01", AUTHORS.BOT);
            }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messageList]);

  if (!messageList[chatId]) {
    return <Navigate to="chats" replace/>
    };

  return (
    <div className="App">
      <header className="App-header">
        My React App
        <СhatMui />
        <div className="App-content">
          {messageList[chatId].map((message) => (
            <Message 
              key={Math.random()}
              text={message.text} 
              author={message.author} 
              onMessageClick={handleMessageClick} 
            />
          ))}
          <div ref={messagesEnd}></div>
        </div>
        <ThemeProvider theme={theme} >
          <FormMui onSubmit={handleAddMessage} />
        </ThemeProvider>
      </header>
    </div>
  );
};