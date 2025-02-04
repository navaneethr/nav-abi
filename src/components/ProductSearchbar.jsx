import React, { useState } from "react"
import styles from '../styles/searchbar.module.css'

const ProductSearchbar = ({options, label, products, setProdResults}) => {

    let [ input, setInputText ] = useState("");

    function handleProdSearch() {
        if(input === "") {
            setProdResults([]);
            return;
        }
        else {
            if(input.length > 2) {
                let filterProdBySearch = options.filter((item) => {
                    if(item.name.toLowerCase().includes(input.toLowerCase())) {
                        return item;
                    }
                })
                setProdResults(filterProdBySearch);
            }
        }
    }

    const onShowHideAll = (show) => {
        setInputText("")
        setProdResults(show ? options : [])
    };

    return (
        <div>
            <div style={{display: "flex", alignItems: "flex-end"}}>
                <div className={styles.mainCont}>
                    <label>{label}</label>
                    <input
                        className={styles.titleInput}
                        type="text"
                        placeholder="Enter search items"
                        onChange={(e) => setInputText(e.target.value)}
                        value={input}
                        onKeyUp={handleProdSearch}
                    />
                </div>
                <div>
                    <button onClick={() => onShowHideAll(true)}>Show All</button>
                    <button onClick={() => onShowHideAll(false)}>Hide All</button>
                </div>
            </div>
            <div className={styles.notes}>
                {
                    products.length > 0 ? (
                        products.map((item) => (
                            <div key={item.key}>
                                 <h4>{item.name}</h4>
                                 <img src={item.image} />
                                 <p>{item.model}</p>
                                 <p>{item.sku}</p>
                                 <p>{item.rating}</p>
                                 <p>{item.price}</p>
                                 <p>{item.discount}</p>
                             </div>
                        ))
                    ) : (
                        <p>No Products found.</p>
                    )
                }
            </div>
        </div>
    );
};

export default ProductSearchbar;