import './App.css';
import Currency from './Currency';
import Length from './Length'
import Menu from './Menu'
import Weight from './Weight'
import Temperature from './Temperature'
import { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends Component {

 render(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Menu/>
        <Switch>
          <Route exact path="/length" component={Length}/>
          <Route exact path="/weight" component={Weight}/>
          <Route exact path="/temperature" component={Temperature}/>
          <Route path="/" component={()=><Currency />} />
        </Switch>
      </header>
    </div>
    </Router>
    );
  }
}

export default App;
