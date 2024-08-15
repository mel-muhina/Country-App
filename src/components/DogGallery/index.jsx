import { useState, useEffect } from "react"
import { useDog } from '../../contexts';
import "./DogGallery.css"

export default function DogGallery() {

  const { dogData, setDogData } = useDog();

  useEffect(() => {
    displayDogs();
  }, [])

  async function displayDogs() {
      const response = await fetch ("https://dogapi-05p6.onrender.com/dogs");
      const data = await response.json();
      console.log("Data check", data)
      setDogData(data)
      console.log("dogData check", dogData)
  }

  return (
    <>
        <div className="dogGallery-container">
           <h1>Dog Gallery</h1>
            <ul>
                {dogData.map(dog => <li>{dog.breed}</li>)}
            </ul>
        </div>
    </>
  )
}
