import React from 'react';

import Routes from './routes';
import GlobalFonts from './styles/fontface';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalFonts />
      <GlobalStyles />
    </>
  );
}

export default App;
