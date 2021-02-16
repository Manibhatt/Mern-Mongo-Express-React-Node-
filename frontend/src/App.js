import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';

import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <Navbar />
      {/* Navbar */}
      {/* Sidebar */}
      {/* Backdrop */}
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen  */}
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen}></Route>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/cart" component={CartScreen}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
