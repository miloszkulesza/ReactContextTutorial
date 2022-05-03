import React, { useContext } from 'react';
import { AppContext } from './AppContext';

export const LoggedButton = () => {
    const { toggleLoggedState } = useContext(AppContext);

    return (
        <button onClick={toggleLoggedState}>Przełącz stan użytkownika</button>
    );
}