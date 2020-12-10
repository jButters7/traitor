import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import routes from './routes';
import { withRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default withRouter(App);
