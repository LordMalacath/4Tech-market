import { Navigate } from "react-router-dom";

const admin = true;

export function ProtectedRoute({ children }) {
    if (!admin) {
        return <Navigate to="/" />
    }
    return children
};