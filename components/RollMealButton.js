import {React, useState} from "react"
import styles from '../styles/RollMealButton.module.css'

export default function RollMealButton() {
    const [meals, setMeals] = useState([{
        name: "",
        url: "",
    }])

    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }

    const handleRoll = async (e) => {
        // console.log(meals)


        const endpoint = '/api/rollmeal'

        const options = {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
            },
        }

        const response = await fetch(endpoint, options)
        // console.log(response)

        const result = await response.json()

        var mealList = []
        
        for(let i = 0; i < 7; i++){
            
            if(getRandomInt(20) == 1) {
                mealList.push({name: "EAT OUTSIDE!!!", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"})
                // setMeals([...meals, {name: "EAT OUTSIDE!!!", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}])
                // console.log(i)
            }
            else {
                mealList.push(result[getRandomInt(result.length)])
                // setMeals([...meals, result[getRandomInt(result.length)]])
                // console.log(i)
            }
        }

        setMeals(mealList)
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
            
            <table className={styles.table}>
                <tbody>
                    <tr>
                        {weekdays.map((day) =>
                            <th className={styles.cell} key={day}>{day}</th>
                        )}
                    </tr>
                    <tr>
                        {meals.map((meal,index) => 
                            <th className={styles.tablerow} key={index} href={meal.url}>{meal.name}</th>
                        )}
                    </tr>
                </tbody>
            </table>
            

        </>
    )
}