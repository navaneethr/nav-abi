import React, { useState } from 'react';
import ProductSearchbar from './ProductSearchbar';
import { laptopData } from './data';

const Catalogue = () => {
    let [isTextField, setIsTextField] = useState(false);
    let [value, setValue] = useState("");
    let [savedValue, setSavedValue] = useState("");
    let [ products, setProdResults ] = useState([]);

    const changeToTextField = (bool) => {
        setIsTextField(bool)
      }
    
      const onSave = () => {
        changeToTextField(!isTextField)
        setSavedValue(value)
      };
    
      const onCancel = () => {
        setValue(savedValue);
        changeToTextField(false);
      }

    return (
        <div>
            <h1>Catalogue of Items</h1>
            <div style={{marginTop: "10px"}}>
            <ProductSearchbar 
                options={laptopData} 
                label="Search for Laptops"
                products={products}
                setProdResults={setProdResults}
                />
            </div>
        </div>
    )
}

export default Catalogue;