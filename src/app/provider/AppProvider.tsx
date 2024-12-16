import React from 'react'
import { createContext, useContext } from 'react';
import { useME } from '@/shared/api/useMe/useMe';

const AppContext = createContext<Partial<any>>({});

const AppProvider = ({ children }: any) => {
    useME()
    return (
        <AppContext.Provider value={{ }}>
        {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => useContext(AppContext);

export { useAppContext };

export default AppProvider;
