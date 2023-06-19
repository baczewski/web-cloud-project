import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
});

export const AuthProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        if (storedAuth) {
            setIsAuthenticated(JSON.parse(storedAuth));
        }
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', JSON.stringify(false));
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}