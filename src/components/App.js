// create your App component here
import React, { useEffect, useState } from "react";


function App() {
    const [DogImage, setDogImage] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((resp) => resp.json())
        .then((data) => {
        setDogImage(data.message)
    })
    .catch((error) => {
        console.error('Error');
    });
    }, []);
    return(
        <div>
        <h1>Random Dog</h1>
        {DogImage ? (
        <img 
        alt="A Random Dog"
        src="https://images.dog.ceo/breeds/bulldog-english/mami.jpg"
        /> ) : (
            <p>Loading...</p>
        )
        }

        </div>
    );


}
export default App;