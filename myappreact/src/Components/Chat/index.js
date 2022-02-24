import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { MessageList } from '../MessageList';
import { FormMui } from '../FormMui';
import { AUTHORS } from '../../utils/constants';
import '../../App.css';
import { Navigate, useParams } from 'react-router-dom';

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

export function Chat({ messages, addMessage}) {
  const params = useParams();
  const { chatId } = params;

  const messagesEnd = useRef();

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    
    addMessage(chatId, newMsg);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (
      messages[chatId]?.[messages[chatId]?.length - 1]?.author === AUTHORS.ME
        ) {
            timeout = setTimeout(() => {
                sendMessage("01 00 01", AUTHORS.BOT);
            }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  if (!messages[chatId]) {
    return <Navigate to="chats" replace/>
  };

  return (
    <div className="App">
      <header className="App-header">
        My React App
        <div className="App-content">
          <MessageList messages={messages[chatId]} />
          <div ref={messagesEnd}></div>
        </div>
        <ThemeProvider theme={theme} >
          <FormMui onSubmit={handleAddMessage} />
        </ThemeProvider>
      </header>
    </div>
  );
};