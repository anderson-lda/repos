import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';

//fragment <> porque div pode atrapalhar as estilizações
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
