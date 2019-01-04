import React from 'react';

class ShoppingList extends React.Component{
    render(){
        return(
            <div className="shopping-list">
                <h1>Shopping List for </h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Facebook</li>
                </ul>
            </div>
        );
    }
}
export default ShoppingList;