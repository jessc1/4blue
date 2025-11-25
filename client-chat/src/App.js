import React  from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Chat from "./components/Chat";
import History from "./components/History";
import './App.css';

const AppRoutes = () => {
  let element = useRoutes([
    { path: '/Chat', element: <Chat /> },
    { path: '/History', element: <History /> },
  ]);

  return element;
};

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>ChatBot API</h2>
          <BrowserRouter>
            <AppRoutes />
        </BrowserRouter> 
      </header>      
    </div>          
   
  );
}

export default App;
