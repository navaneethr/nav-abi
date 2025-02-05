import React from "react"

const Product = ({key, name, image, model, sku, rating, price, discount}) => {
    return (
        <div key={key}>
            <h4>{name}</h4>
            <img src={image} />
            <p>{model}</p>
            <p>{sku}</p>
            <p>{rating}</p>
            <p>{price}</p>
            <p>{discount}</p>
        </div>
    )
}

export default Product;