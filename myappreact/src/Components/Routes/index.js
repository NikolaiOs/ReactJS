import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";
import { Articles } from "../Articles/Articles";
import { Chat } from "../Chat";
import { СhatMui } from "../ListMui";
import ConnectedProfile from "../Profile";

const Home = () => <h2>Home page</h2>;

export const Router = () => {
    const [messageColor, setMessageColor] = useState("forestgreen");

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

                    <li>
                        <NavLink to="/articles" style={({ isActive }) => ({ color: isActive ? "green" : "gray"})}>
                            Articles
                        </NavLink>
                    </li>
                </ul>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="articles" element={<Articles />} />
                <Route path="profile" element={<ConnectedProfile />} />
                <Route path="chats" element={<СhatMui />}>
                    <Route path=":chatId" element={<Chat />} />
                </Route>
                <Route path="*" element={<h2>404</h2>} />
            </Routes>
            
        </BrowserRouter>
        </ThemeContext.Provider>
    );
};