import MediaCard from './Components/Products';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Links from './Components/Links'
import { connect } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Links/>
        <div className="homeTitle"></div>
        <MediaCard/>
        <Footer/>
        <div className="categoryDescription"></div>
      </header>
    </div>
  );
}

export default connect((state) => state)(App);
