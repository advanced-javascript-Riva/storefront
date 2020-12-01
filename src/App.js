import MediaCard from './Components/Products';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Links from './Components/Links'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Links/>
        <MediaCard/>
        <div className="homeTitle">PRODUCTS</div>
        <Footer/>
        <div className="categoryDescription"></div>
      </header>
    </div>
  );
}

export default App;
