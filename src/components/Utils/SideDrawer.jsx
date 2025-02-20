import React from "react";
import styles from '../../styles/sideDrawer.module.css'

const SideDrawer = ({onBackClick, selectedDog}) => {
    // What is selectedDog above ?
    // A: selectedDog is a prop used to integrate the required data of the particular dog when clicked to 
    // set the display of that dog info in the sidedrawer dynamically.
    return (
        <div className={styles.mainSideDrawerContainer}>
            <div>
                <button onClick={onBackClick}>Back</button>
            </div>
            <div>
                <img className={styles.sidedDrawerImg} src={selectedDog.image_url}/>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th><em>Name </em></th>
                        <td>{selectedDog.breed}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th><em>Origin </em></th>
                        <td>{selectedDog.origin}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th><em>Size </em></th>
                        <td>{selectedDog.size}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th><em>Weight Range </em></th>
                        <td>{selectedDog.weight_range}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th><em>Life Expectancy </em></th>
                        <td>{selectedDog.life_expectancy}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th><em>Temperament </em></th>
                        <td>{selectedDog.temperament.join(" , ")}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SideDrawer;