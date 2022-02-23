import { useEffect, useRef } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { MessageList } from '../MessageList';
import { FormMui } from '../FormMui';
import { AUTHORS } from '../../utils/constants';
import '../../App.css';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selectors';
import { addMessageWithThunk } from '../../store/messages/actions';

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

export function Chat() {
  const { chatId } = useParams();

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

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
    
    dispatch(addMessageWithThunk(chatId, newMsg));
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();
    
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