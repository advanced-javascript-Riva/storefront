import React from 'react';


const Header = () => {
    return (
        <div className = "headerContainer">
            <div className="navTitle">
                <div className="title" href="#" >Welcome To The Store</div>
            </div>
            <div className="cart">
                <div className="title" href="#" >Cart(0)</div>
            </div>
            <div className="browseCategories">
                <div className = "browse">Browse our categories</div>
            </div>
            <div className="navLinks">
            </div>
        </div>
    )
}
export default Header;