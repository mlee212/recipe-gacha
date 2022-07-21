import {React, useState} from "react"
export default function RollMealButton() {
    const [meal, setMeal] = useState({
        name: "",
        url: "",
    })

    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    const handleRoll = async (e) => {
        console.log(meal)


        const endpoint = '/api/rollmeal'

        const options = {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(endpoint, options)
        console.log(response)

        const result = await response.json()

        if(getRandomInt(20) == 1) {
            setMeal({name: "EAT OUTSIDE!!!", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"})
        }
        else {
            setMeal(result[getRandomInt(result.length)])
        }
        // console.log(result.length)
        // console.log(result[getRandomInt(result.length)].name)


        
        // alert(`THIS IS YOUR MEAL:))))) : ${result[0].name}`)

        // const { db } = await connectToDatabase();

        // const recipes = await db
        //     .collection("recipe-links")
        //     .find({})
        //     .sort({ metacritic: -1 })
        //     .limit(20)
        //     .toArray();

        // res.json(recipes);
    }

    return (
        <>
            <button onClick={handleRoll}>Roll Meal </button>

            
            <a href={meal.url}>{meal.name}</a>
            

        </>
    )
}