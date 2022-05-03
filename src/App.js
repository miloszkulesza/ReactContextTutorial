import React, { useState } from 'react'
import './App.css';
import { AppContext, defaultObject } from './AppContext';
import { UserInfo } from './UserInfo';
import { LoggedButton } from './LoggedButton';

export const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);

  const handleToggleStateIsLogged = () => {
    setIsUserLogged(!isUserLogged);
  }

  return (
    <>
      <AppContext.Provider value={{
        isUserLogged: isUserLogged,
        toggleLoggedState: handleToggleStateIsLogged
      }}>
        <UserInfo />
        <LoggedButton />
      </AppContext.Provider>
    </>
  ); 
}