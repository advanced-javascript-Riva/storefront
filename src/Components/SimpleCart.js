import React from 'react'
import ListItem  from '@material-ui/core/ListItem';
import {connect} from 'react-redux';

const SimpleCart = props => {
    let total = 0;
    const products = props.cart.map(product => total += product.price * product.quantity);
    const cart  = props.cart.length > 0 ? (
        <ListItem>
                {
                    props.cart.map(product => {
                        return (
                            <div key={product.id}>
                                <ListItem item={product} />
                                <hr />
                            </div>
                        )
                    })
                }   
         </ListItem>
    )
            : 
            (
                <div className="cart-empty">
                    <p>Cart is empty</p>
                </div>
            )
   const mapStateToProps = state => {
        return {
            cart: state.cart.cart
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
       