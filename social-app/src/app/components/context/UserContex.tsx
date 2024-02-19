import React, { createContext, useState, useEffect } from "react";
import { User } from "../../utils/types/AxiosTypes";
import { userContextType, userContextProviderProps } from "../../utils/types/ContextTypes";

// Create global context for user/setUser states
export const userContext = createContext({} as userContextType)

export const UserContextProvider = ({ children }: userContextProviderProps) => {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {

        // Verify JWT token
        async function verifyUserToken() {

        };

        verifyUserToken();
    }, [])

    // Children React node components to inherit context
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}