import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ListContainer from './components/List/ListContainer'
import PasswordGeneratorPage from './components/PasswordGenerator/PasswordGeneratorPage/PasswordGeneratorPage';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='list'>
        <ListContainer />
      </div>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/passwordGenerator' element={<PasswordGeneratorPage />}></Route>

        </Routes>
      </div>

    </div>
  );
}

export default App;
