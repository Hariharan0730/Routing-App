import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Blogs from './components/Blog';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import Post from './components/Post';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/login'><li>Login</li></Link>
          <Link to='/blogs'><li>Blogs</li></Link>
          <Link to='/dashboard'><li>Dashboard</li></Link>
        </ul>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/post/:id' element={<Post />}> </Route>
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/blogs' element={<Blogs />}> </Route>
          <Route path='/dashboard' element={<Dashboard />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
