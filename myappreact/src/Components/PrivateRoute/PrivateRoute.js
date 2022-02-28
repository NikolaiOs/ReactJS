import { Outlet, Navigate } from "react-router";

export const PrivateRoute = ({ authed }) => {
    return authed ? <Outlet /> : <Navigate to="/" replace />;
};