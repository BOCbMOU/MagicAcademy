import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyles, ResetStyles } from '../globalStyles';
import Main from '../pages/Main/Main';

const App = () => {
  return (
    <div className="App">
      <ResetStyles />
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
