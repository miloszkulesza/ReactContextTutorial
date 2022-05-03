import React, { useContext } from 'react'
import { AppContext } from './AppContext';

export const UserInfo = () => {
    const { isUserLogged } = useContext(AppContext);

    return (
        <div>
            <p>Użytkownik jest {isUserLogged ? 'Zalogowany' : 'Niezalogowany'}</p>
        </div>
    );
}
