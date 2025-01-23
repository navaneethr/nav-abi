import React, { useState } from "react"
import styles from '../styles/searchbar.module.css'

const Searchbar = () => {
    const countryData = [
        "Afghanistan",
        "United States of America",
        "Andorra",
        "Antartica",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Bahrain",
        "Bangladesh",
        "Belarus",
        "Belgium",
        "Bermuda",
        "Italy",
        "India",
        "Indonesia",
        "Thailand",
        "Ireland",
        "United Kingdom",
        "United Arab Emirates",
        "Netherlands",
        "Nicaragua",
        "Norway",
        "Dominican Republic",
        "Denmark",
        "Vantanu",
        "Vietnam",
        "Mexico",
        "Morocco",
        "Spain",
        "Sweden",
    ]

    let [ country, setCountry ] = useState([]);
    let [ input, setInputText ] = useState("");

    function handleSearch() {
        if(input === "") {
            setCountry(countryData);
            return;
        }
        else {
            let filterBySearch = countryData.filter((item) => {
                if(item.toLowerCase().includes(input.toLowerCase())) {
                    return item;
                }
            })
            setCountry(filterBySearch);
        }
    }

    return (
        <div>
            <h1 id={styles.pageTitle}>Searchbar</h1>
            <div>
                <div className={styles.mainCont}>
                <label>Search Country</label>
                <input
                    className={styles.titleInput}
                    type="text"
                    placeholder="Enter search items"
                    onChange={(e) => setInputText(e.target.value)}
                    value={input}
                    onKeyUp={handleSearch}
                />
                </div>
            </div>
            <div className={styles.notes}>
                {
                    country.map((country) => {
                        return (
                            <div>{country}</div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Searchbar;