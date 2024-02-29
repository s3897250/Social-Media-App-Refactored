
// Context Types:
// Used for creating global context  


// User Context

import { User } from "./AxiosTypes";

export type userContextType = {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export type userContextProviderProps = {
    children: React.ReactNode | null
}
