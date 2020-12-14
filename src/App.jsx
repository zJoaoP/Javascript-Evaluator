import React from 'react';

import GlobalStyle from 'GlobalStyle';

import Home from 'views/Home';

import 'antd/dist/antd.css';

function App() {
  return (
    <div id="app">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
