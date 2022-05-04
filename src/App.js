import React from 'react'
import './App.css';
import AppProvider from './AppContext';
import { UserInfo } from './UserInfo';
import { LoggedButton } from './LoggedButton';

export const App = () => {  
  

  return (
    <>
      <AppProvider>
        <UserInfo />
        <LoggedButton />
      </AppProvider>
    </>
  ); 
}