import React from 'react';
import '../Components/Header.css';

const Header = () => {
    return (
        <>
        <div className = "headerContainer">
          <div className="storeTitle" href="#" >Welcome To The Store</div>
          <div className="title" href="#" >Cart(0)</div>
        </div>
        <div className="browseCategories">
           <div className="browse">Browse our categories</div>
        </div>
        </>
    )
}
export default Header;