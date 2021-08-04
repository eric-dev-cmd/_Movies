import './App.css';
import './assets/css/styles.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Navigation/MainNav';

function App() {
  return (
    <>
      <Header />
      <div className='app'>Movies</div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
