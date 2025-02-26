import React, { useState } from "react";
import styles from "../styles/dogs.module.css";
import Dog from "../components/Utils/Dog";
import SideDrawer from "./Utils/SideDrawer";
import dogs from "../data/dogs.json"


const Dogs = () => {
    const [showDrawer, setShowDrawer] = useState(false)
    const [selectedDog, setSelectedDog] = useState(null);

    const onViewMore = (data) => {
        setShowDrawer(true)
        // What is this line ?
        setSelectedDog(data);
    }

    const onBackClick = () => {
        setShowDrawer(false)
        // Why are we setting this to be Null
        setSelectedDog(null);
        // we are setting the setSelectedDog to be null to reset the display of the dog info on sidebar to empty
        // so that the sidebar vanishes as there is no data to display and keep the sidebar open
    }

  return (
    <div className={styles.mainDogContainer}>
      <h1>Dogs</h1>
      <div className={styles.dogList}>
        {
            dogs.map((dog, index) => {
                return (
                    <Dog key={index} imgUrl={dog.image_url} breed={dog.breed} onViewMore={() => onViewMore(dog)}/>
                )
            })
        }
      </div>
      <p>Remaining Count: {dogs.length}</p>
      <button>View More</button>
      {/* What is && operator ?
            A: The && operator when used in JSX acts as an expression. This is done by wrapping them in curly braces
                and is a way of using the JavaScript logical && operator to conditionally include an element in the JSX.
                
                How it works: 
                true && expression - always evaluates to expression
                false && expression - always evaluates to false 
                
                Therefore if the condition is true, the element right after the && will appear in the output.
                If it is false, React will ignore and skip it. */}
      {
        showDrawer && <SideDrawer onBackClick={onBackClick} selectedDog={selectedDog}/>
      }
    </div>
  );
};

export default Dogs;