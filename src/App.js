import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import PostDetails from './containers/PostDetails';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* Header */} 
       <Header />

        <div className="mt-5">
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/posts' component={Posts} exact/>
            <Route path='/posts/1' component={PostDetails} />
            <Route path='/about' component={About} />
            {/* TODO: Learn about 404 */}
          </Switch>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
