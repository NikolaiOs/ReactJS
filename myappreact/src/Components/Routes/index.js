import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";
import { Chat } from "../Chat";
import { СhatMui } from "../ListMui";
import ConnectedProfile, { Profile } from "../Profile";
import { addChat, deleteChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";
import { addMessage } from "../../store/messages/actions";

const Home = () => <h2>Home page</h2>;

export const Router = () => {
    const [messageColor, setMessageColor] = useState("forestgreen");

    const messages = useSelector(selectMessages);

    const chatList = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleAddMessage = (chatId, newMsg) => {
        dispatch(addMessage(chatId, newMsg));
    };

    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        

        dispatch(addChat(newId, newChatName));
    };

    const handleDeleteChat = (idToDelete) => {
        dispatch(deleteChat(idToDelete));
    };

    return (
        <ThemeContext.Provider value={{messageColor, setMessageColor}}>
        <BrowserRouter>

            <header>
                <ul>
                    <li>
                        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "green" : "gray"})}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/profile" style={({ isActive }) => ({ color: isActive ? "green" : "gray"})}>
                            Profile
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/chats" style={({ isActive }) => ({ color: isActive ? "green" : "gray"})}>
                            Chats
                        </NavLink>
                    </li>
                </ul>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="profile" element={<ConnectedProfile />} />
                <Route path="chats" element={<СhatMui onDeleteChat={handleDeleteChat} onAddChat={handleAddChat} chats={chatList} />}>
                    <Route path=":chatId" element={<Chat messages={messages} addMessage={handleAddMessage}/>} />
                </Route>
                <Route path="*" element={<h2>404</h2>} />
            </Routes>
            
        </BrowserRouter>
        </ThemeContext.Provider>
    );
};