import React from 'react';
import 'App.css';
import PageRouter from 'Router'
import ContextProvider from 'context/ContextProvider';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <PageRouter />
      </ContextProvider>
    </div>
  );
}

export default App;
