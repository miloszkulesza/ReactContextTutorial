import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isUserLogged, setIsUserLogged] = useState(false);

    const handleToggleStateIsLogged = () => {
        setIsUserLogged(!isUserLogged);
    }

    return (
        <AppContext.Provider value={{
            isUserLogged: isUserLogged,
            toggleLoggedState: handleToggleStateIsLogged
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;