import './App.css';
import CRUD from './Components/CRUD';
import Navbar from './Components/Navbar';
import Post from './Components/Post';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Post />
      <CRUD />
    </div>
  );
}

export default App;
