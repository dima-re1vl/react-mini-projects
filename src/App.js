import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ListContainer from './components/List/ListContainer'

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='list'>
        <ListContainer />
      </div>
      <div className='content'>
        <Home />
      </div>

    </div>
  );
}

export default App;
