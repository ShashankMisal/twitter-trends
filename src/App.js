import './App.css';
import Sidebar from './Sidebar'
import Widgets from './Widgets'
import Feed from './Feed'
import Explore from './Explore'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Sidebar />

        <Switch>
          <Route path="/" component={Feed} exact />
          <Route path="/Explore" component={Explore} exact />
        </Switch>
        
      <Widgets />
    </div>
  );
}

export default App;
