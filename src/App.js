import {BrowserRouter as HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import Header from './header/Header';
import MainPage from './pages/MainPage';
import FilmsPage from './pages/FilmsPage';
import './header/Header.css';

function App() {
  return (
    <>
      <HashRouter>
        <Header/>
        <Switch>
            <Route exact path="/main" component={MainPage}/>
            <Route  path="/films" component={FilmsPage}/>
            <Redirect from='/' to='/main'/>
        </Switch>
      </HashRouter>
    </>
  );
}


export default App;
