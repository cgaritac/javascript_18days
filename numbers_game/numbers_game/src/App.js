import React from 'react';
import Header from './header';
import Main from './main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main limit={10}/>
    </div>
  );
}

export default App;
