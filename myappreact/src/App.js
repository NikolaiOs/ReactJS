import { useEffect, useState } from 'react';
import './App.css';
import { Message } from './Components/Message';
// import { Counter } from './Components/Counter';
import { Form } from './Components/Form';
import { AUTHORS } from './utils/constants';


function App() {
  const [messageList, setMessageList] = useState([]);

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
        {messageList.map((message) => (
          <Message 
            text={message.text} 
            author={message.author} 
            onMessageClick={handleMessageClick} 
          />
        ))}
        {/* <Counter /> */}
        <Form onSubmit={handleAddMessage} />
      </header>
    </div>
  );
};

export default App;