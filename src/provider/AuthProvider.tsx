import React, {ReactElement, useState} from 'react';
import {UserShortInfo} from "../types";

export interface AuthContextProps {
    currentUser: UserShortInfo | null,
    setCurrentUser: (user: UserShortInfo | null) => void
}

export const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({children}: {children: ReactElement}) => {

    const [currentUser,setCurrentUser] = useState<UserShortInfo | null>(null);

    return (
        <AuthContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;