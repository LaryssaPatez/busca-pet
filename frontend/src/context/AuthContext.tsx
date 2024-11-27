import React, { createContext, useState, useEffect } from 'react';
import { AuthContextProps, AuthData } from '../utils/types';
import { getUserFromToken } from '../utils/auth';

export const AuthContext = createContext<AuthContextProps>({
    authData: { token: null, user: null },
    setAuthData: () => {},
    logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>({ token: null, user: null });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user:any = getUserFromToken(token);
            setAuthData({ token, user });
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
        setAuthData({ token: null, user: null });
    };

    return (
        <AuthContext.Provider value={{ authData, setAuthData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
