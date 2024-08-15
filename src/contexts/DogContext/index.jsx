import { useContext, createContext, useState } from "react";

// Create context
const DogContext = createContext();

// Create provider
export const DogProvider = ({children}) => {
    const [dogData, setDogData] = useState([])

    return (
        <DogContext.Provider value={{ dogData, setDogData }}>
            {children}
        </DogContext.Provider>
    )
}

// Create custom hook to consume context (state/data)
export const useDog = () => useContext(DogContext);