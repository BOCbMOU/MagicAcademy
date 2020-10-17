import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Spells from '../pages/Spells/Spells';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/spells" component={Spells} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
