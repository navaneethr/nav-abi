import React from "react"
import styles from "../../styles/dogs.module.css"

const Dog = ({imgUrl, breed, origin, onViewMore}) => {
    return (
        <div className={styles.dogDiv}>
            {/* Why is this imgUrl instead of image_url ?
                A: We are passing imgUrl to act as a prop for image_url which dynamically populates 
                the image from the image_url of the mapped dog object to the img element on the div to be displayed.
                 */}
            <img src={imgUrl} className={styles.dogImage} />
            <div className={styles.breedName}>{breed}</div>
            <div>{origin}</div>
            <button onClick={onViewMore}>View</button>
        </div>
    )
}

export default Dog;