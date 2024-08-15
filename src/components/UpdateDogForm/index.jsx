import { useState } from "react";

const UpdateDogForm = () => {

    const [oldBreed, setOldBreed] = useState("");
 
    const [dog, setDog] = useState({
        breed: "",
        lifespan: "",
        nickname: ""
    })
    const [pageName, setPageName] = useState("Update a specific breed!");

    const handleOldBreed = (e) => {
        e.preventDefault();
        const name = e.target.value;
        setOldBreed(name);

     }

    const handleInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setDog({ ...dog, [name]: value });
     }

   async function handleSubmit(e) {
        e.preventDefault();
        const data = dog

        try {
            
            const options = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
          const response = await fetch(`https://dogapi-05p6.onrender.com/dogs/${oldBreed}`, options)
          const resData = await response.json()
          setDog({
            breed: "",
            lifespan: "",
            nickname: ""
        });
        setOldBreed("")
        //   handleInput("")
            if(resData.status = 200) {
                setPageName(`The ${oldBreed} breed has been updated.`)
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
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="oldbreed" className="form-label">Breed to Update</label>
                        <input type="text" className="form-control" id="oldbreed" name="oldbreed" value={oldBreed} onChange={handleOldBreed} />
                    </div>
                    <div>
                        <label htmlFor="breed" className="form-label">Dog Breed Name</label>
                        <input type="text" className="form-control" id="breed" name="breed" value={dog.breed} onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="lifespan" className="form-label">Dog Lifespan</label>
                        <input type="text" className="form-control" id="lifespan" name="lifespan" value={dog.lifespan} onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="nickname" className="form-label">Dog Nickname</label>
                        <input type="text" className="form-control" id="nickname" name="nickname" value={dog.nickname} onChange={handleInput} />
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                </form>
            </div>
        </>
    )
}

export default UpdateDogForm