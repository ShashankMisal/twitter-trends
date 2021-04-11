import './App.css';
import Sidebar from './Sidebar'
import Widgets from './Widgets'
import Feed from './Feed'
import Explore from './Explore'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="app">

        <Switch>
          
          <Route exact path="/" >
            <Sidebar />
            <Feed />
            <Widgets />
          </Route>

          <Route path="/Explore">
            <Sidebar />
            <Explore />
            <Widgets />
          </Route>

          <Route path="*">
              <h1>Opps page not found</h1>
          </Route>
        
        </Switch>

    </div>
  );
}

export default App;
