import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Huaban from './pages/huaban/huaban';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/huaban']} component={Huaban} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;