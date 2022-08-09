import React, { useState } from 'react';
import { userService } from 'services';

export default function RecipeForm() {
    const [recipeList, setRecipeList] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name: e.target.name.value,
            url: e.target.url.value,
            username: userService.userValue?.username
        }

        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/form'
        const options = {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
            },

            body: JSONdata,
        }

        const response = await fetch(endpoint, options)

        const result = await response.json()
        
        alert(`is this what u entered: ${result.data}`)
    }

    // function submitNewRecipe () {
    //     /*Well if the elements are nested event.target won't always work
    //       since it refers to the target that triggers the event in the first place.*/
    //     //  console.log(e.target.id);
    //     //  console.log(e.currentTarget.id);
    // }
      // function submitNewRecipe() {
      //   console.log("hey")
      // }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>recipe name</label>
            <input type="text" id="name" name="name" />
            <label>url:</label>
            <input type="text" id="url" name="url" />
            <button type="submit">Submit</button>
        </form>
    )
}