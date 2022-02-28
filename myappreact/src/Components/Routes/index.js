import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { ThemeContext } from "../../utils/ThemeContext";
import { Articles } from "../Articles/Articles";
import { Chat } from "../Chat";
import { Home } from "../Home/Home";
import { СhatMui } from "../ListMui";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import ConnectedProfile from "../Profile";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { auth } from "../../services/firebase";

export const Router = () => {
    const [messageColor, setMessageColor] = useState("forestgreen");

    const [authed, setAuthed] = useState(false);
    const authorize = () => {
        setAuthed(true);
    };
    const unauthorize = () => {
        setAuthed(false);
    };

    const contextValue = {
        messageColor,
        setMessageColor,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });

        return unsubscribe;
    }, []); 

    return (
        <ThemeContext.Provider value={contextValue}>
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
                <Route path="/" element={<PublicRoute authed={authed} />} >
                    <Route path="" element={<Home  />} />
                    <Route path="/signup" element={<Home isSignUp />} />  
                </Route>
                <Route path="profile" element={<PrivateRoute authed={authed} />} >
                    <Route path="" element={<ConnectedProfile onLogout={unauthorize} />} />
                </Route>
                <Route path="articles" element={<Articles />} />
                <Route path="chats" element={<СhatMui />}>
                    <Route path=":chatId" element={<Chat />} />
                </Route>
                <Route path="*" element={<h2>404</h2>} />
            </Routes>
            
        </BrowserRouter>
        </ThemeContext.Provider>
    );
};