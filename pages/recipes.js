import { connectToDatabase } from "../lib/mongodb";

export default function Recipes({ recipes }) {
  return (
    <div>
      <h1>Recipe List</h1>
      
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <h3>{recipe.url}</h3>
            <p>{"ayo, its ya boi"}</p>
            {console.log(recipe)}
          </div>
        ))}
      
    </div>
  );
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
  
    const recipes = await db
      .collection("recipe-links")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
  
    return {
      props: {
        recipes: JSON.parse(JSON.stringify(recipes)),
      },
    };
  }