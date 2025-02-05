import React, { useState } from "react"
import styles from '../styles/searchbar.module.css'

const Searchbar = ({options, label, results, setResults}) => {

    let [ input, setInputText ] = useState("");

    function handleSearch() {
        if(input === "") {
            setResults([]);
            return;
        }
        else {
            if(input.length > 2) {
                let filterBySearch = options.filter((item) => {
                    if(item.toLowerCase().includes(input.toLowerCase())) {
                        return item;
                    }
                })
                setResults(filterBySearch);
            }
        }
    }

    const onShowHideAll = (show) => {
        setInputText("")
        setResults(show ? options : [])
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
                        onKeyUp={handleSearch}
                    />
                </div>
                <div>
                    <button onClick={() => onShowHideAll(true)}>Show All</button>
                    <button onClick={() => onShowHideAll(false)}>Hide All</button>
                </div>
            </div>
            <div className={styles.notes}>
                {
                    results.map((result) => {
                        return (
                            <div>{result}</div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Searchbar;