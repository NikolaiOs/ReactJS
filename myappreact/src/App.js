import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Message } from './Components/Message';
import { FormMui } from './Components/FormMui';
import { AUTHORS } from './utils/constants';
import { СhatMui } from './Components/ListMui';

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


function App() {
  const [messageList, setMessageList] = useState([]);
  const messagesEnd = useRef();

  const handleMessageClick = () => {

  };

  const handleAddMessage = (text) => {
    const newMsg = {
      text,
      author: AUTHORS.ME,
    };
    
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        const newMsg = {
          text: "01 00 01",
          author: AUTHORS.BOT,
        };

        setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        My React App
        <СhatMui />
        <div className="App-content">
          {messageList.map((message) => (
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

export default App;