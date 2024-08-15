import React, { useState } from 'react'


const CreateDogForm = () => {
    const [error, setError] = useState(null);
 
    const [dog, setDog] = useState({
        breed: "",
        lifespan: "",
        nickname: ""
    })
    const [pageName, setPageName] = useState("Add a new breed!");
    const [input, setInput] = useState("")

    const handleInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setDog({ ...dog, [name]: value });
     }

   async function handleSubmit(e) {
        e.preventDefault();
         // const data = e.target.value
        const data = dog

        // console.log(user)
        try {
            
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
          const response = await fetch(`https://dogapi-05p6.onrender.com/dogs`, options)
          const resData = await response.json()
          setDog({
            breed: "",
            lifespan: "",
            nickname: ""
        });
        //   handleInput("")
            if(resData.status = 201) {
                setPageName("Your breed has been added to the compendium.")
            } else {
                setPageName("Sorry, that didn't work - please try again.")
            }

        } catch (err) {
            console.log(err);
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

export default CreateDogForm