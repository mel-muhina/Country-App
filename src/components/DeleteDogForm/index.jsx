import { useState } from "react";

const DeleteDogForm = () => {

    const [oldBreed, setOldBreed] = useState("");
 
    const [dog, setDog] = useState({
        breed: "",
        lifespan: "",
        nickname: ""
    })
    const [pageName, setPageName] = useState("Delete a specific breed!");

    const handleInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setDog({ ...dog, [name]: value });
     }

   async function handleSubmit(e) {
        e.preventDefault();
        const data = dog.breed

        try {
            
            const options = {
                method: "DELETE"
            }
          const response = await fetch(`https://dogapi-05p6.onrender.com/dogs/${data}`, options)
          setDog({
            breed: ""
            
        });

            if(response.status === 204) {
                setPageName(`The ${data} breed has been deleted.`)
            } else {
                setPageName("Sorry, that didn't work - please try again.")
            }

        } catch (err) {
            console.log({err});
        }

    }

    

    return (
        <>
            <div className='dog-form'>
                <div className='heading'>
                <h2>{pageName}</h2>
                </div>
                <form>
        
                    <div>
                        <label htmlFor="breed" className="form-label">Dog Breed</label>
                        <input type="text" className="form-control" id="breed" name="breed" value={dog.breed} onChange={handleInput} />
                    </div>
                   
                   
                    <button type="submit" className="btn btn-primary submit-btn" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default DeleteDogForm