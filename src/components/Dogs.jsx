import React, { useState } from "react";
import styles from "../styles/dogs.module.css";
import Dog from "../components/Utils/Dog";
import SideDrawer from "./Utils/SideDrawer";
import dogs from "../data/dogs.json"


const Dogs = () => {
    const [showDrawer, setShowDrawer] = useState(false)
    const [selectedDog, setSelectedDog] = useState(null);
    const [dogPageSize, setDogPageSize] = useState(5);
    const first5DogArr = dogs.slice(0, dogPageSize);
    const [ dogsBeingDisplayed, setdogsBeingDisplayed] = useState(first5DogArr);
    const pageSizeArr = [5, 10 , 15, 20, 21 ];

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

    const onViewAllDogs = (data) => {
      setdogsBeingDisplayed(dogs.slice(0, dogs.length));
    }

    // const onViewMoreDogs = (data) => {
    //     const nextFiveDogs = dogs.slice(numberOfDogs.length, numberOfDogs.length + dogPageSize);
    //     setNumberOfDogs([...numberOfDogs, ...nextFiveDogs]);
    // }

    const onOptionChangeHandler = (data) => {
      // setPageSize(data.target.value);
      console.log(
          "User Selected Value - ",
          data.target.value
      );
      setdogsBeingDisplayed(dogs.slice(0, data.target.value));
  };

    const remainingCount = (dogs.length) - dogsBeingDisplayed.length
  
  console.log(first5DogArr);
  console.log(dogsBeingDisplayed);

  return (
    <div className={styles.mainDogContainer}>
      
      <h1>Dogs</h1>
      <select className={styles.dropDown} onChange={onOptionChangeHandler}>
          {pageSizeArr.map((option, index) => {
              return (
                  <option key={index}>
                      {option}
                  </option>
              );
          })}
      </select>
      <div className={styles.dogList}>
        {
            dogsBeingDisplayed.map((dog, index) => {
                return (
                    <Dog key={index} imgUrl={dog.image_url} breed={dog.breed} origin={dog.origin} onViewMore={() => onViewMore(dog)}/>
                )
            })
        }
      </div>
      <p>Remaining Count: {remainingCount}</p>
      <button disabled={remainingCount === 0} onClick={onViewAllDogs}>View All Dogs</button>
      {/* <button disabled={remainingCount == 0} onClick={onViewMoreDogs}>View More</button> */}
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