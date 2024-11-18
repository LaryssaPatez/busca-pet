import React, { createContext, useState, useEffect } from 'react';
import { AuthContextProps, AuthData } from '../utils/types';

export const AuthContext = createContext<AuthContextProps>({
    authData: { token: null },
    setAuthData: () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>({ token: null });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthData({ token });
        }
    }, []);

    useEffect(() => {
        if (authData.token) {
            localStorage.setItem('token', authData.token);
        } else {
            localStorage.removeItem('token');
        }
    }, [authData.token]);

    const logout = () => {
        setAuthData({ token: null });
    };

    return (
        <AuthContext.Provider value={{ authData, setAuthData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
