import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { СhatMui } from "../ListMui";

const Home = () => <h2>Home page</h2>;
const Profile = () => <h2>Profile page</h2>;

export const Router = () => {
    return (
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
                <Route path="profile" element={<Profile />} />
                <Route path="chats" element={<СhatMui />}>
                    <Route path=":chatId" element={<Chat />} />
                </Route>
                <Route path="*" element={<h2>404</h2>} />
            </Routes>
            
        </BrowserRouter>
    );
};