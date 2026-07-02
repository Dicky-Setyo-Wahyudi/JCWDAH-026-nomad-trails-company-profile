import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";

interface Props {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;