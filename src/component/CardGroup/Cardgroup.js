import React from 'react';
import Card from '../Card/Card';


const Cardgroup = () => {
    const products = [
        {id: 1, name: 'Mahbub', age: 23},
        {id: 2, name: 'Tanzil', age: 24},
        {id: 2, name: 'Rakib', age: 25},
    ]

    return (
        <div className="card-group">
            {
                products.map(product => <Card key={product.id} product ={product}></Card>)
            }
        </div>

    );
};

export default Cardgroup;