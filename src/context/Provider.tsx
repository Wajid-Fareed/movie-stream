'use client'
import { IUserContext, IUserData } from '@/types/type';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface ProviderProps {
    children: ReactNode;
}
export const UserContext = createContext<IUserContext | undefined>(undefined);
const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<IUserData>();
    useEffect(() => {
        console.log('user', userData);
    }, [userData]);
    return (
        <UserContext.Provider value={{userData , setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export default Provider

export const useUserContext = (): IUserContext => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
  };