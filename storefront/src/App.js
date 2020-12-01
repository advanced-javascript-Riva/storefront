import MediaCard from './Components/Products';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Footer/>
        <MediaCard/>
        <div className="homeTitle">Electronics</div>
        <div className="categoryDescription"></div>
      </header>
    </div>
  );
}

export default App;
