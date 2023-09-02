import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ListContainer from './components/List/ListContainer'
import PasswordGeneratorPage from './components/PasswordGenerator/PasswordGeneratorPage/PasswordGeneratorPage';
import HomeContainer from './components/Home/HomeContainer';
import FindPersonContainer from './components/FindPerson/FindPersonContainer';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='list'>
        <ListContainer />
      </div>
      <div className='content'>
        <Routes>
          <Route path='/home' element={<HomeContainer />}></Route>
          <Route path='/passwordGenerator' element={<PasswordGeneratorPage />}></Route>
          <Route path='/findPerson' element={<FindPersonContainer />}></Route>

        </Routes>
      </div>

    </div>
  );
}

export default App;
