import { useState, useEffect } from "react";
import CatCard from "../components/CatCard";

function Cats() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds?limit=30`)
    .then(res => res.json())
    .then(data => { 
        console.log(data[0])
        setCats(data)})
    }, []);

    return (
        <div className='container text-left mt-5'>
            <h1 className='display-3'>Cats</h1>
            {cats.map(cat => (
            <CatCard key={cat.id} cat={cat}/>
        ))}
        </div>
    )
}

export default Cats