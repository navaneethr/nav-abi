import React, { useState } from "react";
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
    }

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1>Dogs</h1>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {
            dogs.map((dog, index) => {
                return (
                    <Dog key={index} imgUrl={dog.image_url} breed={dog.breed} onViewMore={() => onViewMore(dog)}/>
                )
            })
        }
      </div>
      {/* What is && operator */}
      {
        showDrawer && <SideDrawer onBackClick={onBackClick} selectedDog={selectedDog}/>
      }
    </div>
  );
};

const Dog = ({imgUrl, breed, onViewMore}) => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "300px", height: "300px", border: "1px solid", margin: "5px"}}>
            Why is this imgUrl instead of image_url
            <img src={imgUrl} height="100"/>
            <div>{breed}</div>
            <button onClick={onViewMore}>View More</button>
        </div>
    )
}

const SideDrawer = ({onBackClick, selectedDog}) => {
    // What is selectedDog above
    return (
        <div style={{ height: "100vh", width: "60%", background: "#cacaca", position: "fixed", top: 0, bottom: 0, right: 0, padding: "10px"}}>
            <div>
                <button onClick={onBackClick}>Back</button>
            </div>
            Name: {selectedDog.breed}
        </div>
    )
}

export default Dogs;