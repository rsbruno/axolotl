import React,
{
    createContext,
    useContext,
    useState,
    ReactNode,
} from 'react'
import { useEffect } from 'react'

import { firebase, auth } from "../services/firebase"

export type User = undefined | {
    uid: string;
    displayName: String;
    photoURL: string;
    email: string;
}

type AuthContextData = {
    user: User;
    setUser: (t: User) => (void);
}

type AuthContextProps = {
    children: ReactNode;
    value: undefined | User
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children, value }: AuthContextProps) {

    const [user, setUser] = useState<User>(value);

    useEffect(() => {
        setUser(value)
    }, [value])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

async function signInWithGooglePopup() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const response = await auth.signInWithPopup(provider).then(result => {
        if (result.user) {
            const { displayName, photoURL, uid, email } = result.user
            return {
                displayName,
                photoURL,
                uid,
                email
            }
        }
    })
    return response;
}

export {
    AuthProvider,
    useAuth,
    signInWithGooglePopup
}