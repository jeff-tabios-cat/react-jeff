import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      
      <Switch>
        <Route exact path="/react-jeff/" component={Home} />
        <Route path="/react-jeff/about" render={ () => <About title='About' /> } />
        <Route exact path="/react-jeff/teachers" component={Teachers} />
        <Route path="/react-jeff/teachers/:topic/:name" component={Featured} />
        <Route path="/react-jeff/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;




