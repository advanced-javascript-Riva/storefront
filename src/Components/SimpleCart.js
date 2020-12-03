import React from 'react'
import ListItem  from '@material-ui/core/ListItem';
import {connect} from 'react-redux';

const SimpleCart = props => {
    let total = 0;
    const items = props.cart.map(item => total += item.product.price * item.quantity);
    const cart  = props.cart.length > 0 ?(
        <ListItem>
                {
                    props.cart.map(item => {
                        return (
                            <div key={item.product.id}>
                                <Item item={item} />
                                <hr />
                            </div>
                        )
                    })
                }   
         </ListItem>
    )

   const mapStateToProps = state => {
        return {
            cart: state.cart.cart
        }
    };

}
  export default connect(mapStateToProps)(SimpleCart);
       