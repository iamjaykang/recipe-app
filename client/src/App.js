import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
